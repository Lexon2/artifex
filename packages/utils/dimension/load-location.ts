import {
  Block,
  Dimension,
  Entity,
  system,
  TicksPerSecond,
  Vector3,
  world,
} from '@minecraft/server';

import { getAllEntities } from './get-all-entities';
import { floor } from '../vector/floor';

/// Private Types ///

type LoaderRadius = 2 | 3 | 4 | 5 | 6;

/// Private Functions ///

const getBlockSave = (
  location: Vector3,
  dimension: Dimension,
): Block | undefined => {
  try {
    return dimension.getBlock(location);
  } catch (error) {
    return undefined;
  }
};

const spawnLoader = async (
  location: Vector3,
  dimension: Dimension,
  radius: number,
): Promise<Entity | undefined> => {
  const entityToSpawn = world.getAllPlayers()[0] ?? getAllEntities()[0];
  if (!entityToSpawn) {
    return;
  }

  try {
    const loader = dimension.spawnEntity(
      'artifex:loader',
      entityToSpawn.location,
    );
    if (!loader) return;

    await system.waitTicks(1);

    loader.triggerEvent(`artifex:set_load_area_${radius}`);
    loader.teleport(location);

    return loader;
  } catch (error) {}
};

const validateOptions = (
  options?: LoadLocationOptions,
): Required<LoadLocationOptions> => {
  if (options === undefined) {
    return {
      maxTries: 10,
      unloadDelay: TicksPerSecond * 5,
      radius: 2,
    };
  }

  return {
    maxTries: options.maxTries ?? 10,
    unloadDelay: options.unloadDelay ?? TicksPerSecond * 5,
    radius: options.radius ?? 2,
  };
};

const removeLoader = (loader: Entity) => {
  try {
    loader.remove();
  } catch (error) {}
};

/// Public Types ///

export interface LoadLocationResult {
  block: Block | undefined;
  unload: () => void;
}

export interface LoadLocationOptions {
  /**
   * The radius of the area to load.
   * @default 2
   */
  radius?: LoaderRadius;
  /**
   * The maximum number of tries to load the location.
   * The delay between tries is 5 ticks.
   * @default 10
   */
  maxTries?: number;
  /**
   * The delay in ticks before the location is unloaded.
   * @default 5 seconds
   */
  unloadDelay?: number;
}

/// Public API ///

export const loadLocation = async (
  location: Vector3,
  dimension: Dimension,
  options?: Partial<LoadLocationOptions>,
): Promise<LoadLocationResult> => {
  location = floor(location);

  let block: Block | undefined = getBlockSave(location, dimension);
  if (block) {
    return {
      block,
      unload: () => {},
    };
  }

  const forceUnload = (loader: Entity, unloadDelay: number) => {
    system.runTimeout(() => removeLoader(loader), unloadDelay);
  };

  const { maxTries, unloadDelay, radius } = validateOptions(options);
  const loader = await spawnLoader(location, dimension, radius);
  if (!loader) {
    return {
      block: undefined,
      unload: () => {},
    };
  }

  for (let i = 0; i < maxTries; i++) {
    block = getBlockSave(location, dimension);

    if (block) {
      forceUnload(loader, unloadDelay);

      return {
        block,
        unload: () => removeLoader(loader),
      };
    }
    await system.waitTicks(5);
  }

  removeLoader(loader);

  return {
    block: undefined,
    unload: () => {},
  };
};
