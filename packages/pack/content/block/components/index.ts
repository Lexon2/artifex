import { createCollisionBox } from './collision-box';
import { createCraftingTable } from './crafting-table';
import { createCustomComponents } from './custom-components';
import { createDestructibleByExplosion } from './destructible-by-explosion';
import { createDestructibleByMining } from './destructible-by-mining';
import { createDestructionParticles } from './destruction-particles';
import { createEntityFallOn } from './entity-fall-on';
import { createFlammable } from './flammable';
import { createFriction } from './friction';
import { createGeometry } from './geometry';
import { createItemVisual } from './item-visual';
import { createLightDampening } from './light-dampening';
import { createLightEmission } from './light-emission';
import { createLiquidDetection } from './liquid-detection';
import { createLoot } from './loot';
import { createMapColor } from './map-color';
import { createMaterialInstances } from './material-instances';
import { createPlacementFilter } from './placement-filter';
import { createRedstoneConductivity } from './redstone-conductivity';
import { createReplaceable } from './replaceable';
import { createSelectionBox } from './selection-box';
import { createBlockTags } from './tags';
import { createTick } from './tick';
import { createTransformation } from './transformation';
import { createDisplayName } from '../../item/convertors/components/display-name';

/**
 * Mapping of BlockConfig component properties to their creator functions
 */
export const blockComponentCreatorsFactory: Record<string, (v?: any) => any> = {
  collisionBox: createCollisionBox,
  craftingTable: createCraftingTable,
  customComponents: createCustomComponents,
  destructibleByExplosion: createDestructibleByExplosion,
  destructibleByMining: createDestructibleByMining,
  destructionParticles: createDestructionParticles,
  displayName: createDisplayName,
  entityFallOn: createEntityFallOn,
  flammable: createFlammable,
  friction: createFriction,
  geometry: createGeometry,
  itemVisual: createItemVisual,
  lightDampening: createLightDampening,
  lightEmission: createLightEmission,
  liquidDetection: createLiquidDetection,
  loot: createLoot,
  mapColor: createMapColor,
  materialInstances: createMaterialInstances,
  placementFilter: createPlacementFilter,
  redstoneConductivity: createRedstoneConductivity,
  replaceable: createReplaceable,
  selectionBox: createSelectionBox,
  tags: createBlockTags,
  tick: createTick,
  transformation: createTransformation,
};

// Re-export all component creators
export * from './collision-box';

export * from './crafting-table';

export * from './custom-components';

export * from './destructible-by-explosion';

export * from './destructible-by-mining';

export * from './destruction-particles';

export * from './entity-fall-on';

export * from './flammable';

export * from './friction';

export * from './geometry';

export * from './item-visual';

export * from './light-dampening';

export * from './light-emission';

export * from './liquid-detection';

export * from './loot';

export * from './map-color';

export * from './material-instances';

export * from './placement-filter';

export * from './redstone-conductivity';

export * from './replaceable';

export * from './selection-box';

export * from './tags';

export * from './tick';

export * from './transformation';
