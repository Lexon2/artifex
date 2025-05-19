interface DurabilitySensorOptions {
  durability?: number;
  particleType?: string;
  soundEvent?: string;
}

/**
 * Creates a durability_sensor component for Minecraft items
 * @param options The durability sensor options
 * @returns The durability_sensor component in Minecraft format or undefined if validation fails
 */
export const createDurabilitySensor = (
  options?: DurabilitySensorOptions,
): { 'minecraft:durability_sensor': any } | undefined => {
  if (!options) {
    return undefined;
  }

  const result: any = {};

  if (options.durability !== undefined) {
    if (typeof options.durability !== 'number' || options.durability < 0) {
      // @TODO: Add error handling
      console.error('Durability must be a non-negative number');

      return undefined;
    }
    result.durability = options.durability;
  }

  if (options.particleType !== undefined) {
    if (
      typeof options.particleType !== 'string' ||
      options.particleType.length === 0
    ) {
      // @TODO: Add error handling
      console.error('Particle type must be a non-empty string');

      return undefined;
    }
    result.particle_type = options.particleType;
  }

  if (options.soundEvent !== undefined) {
    if (
      typeof options.soundEvent !== 'string' ||
      options.soundEvent.length === 0
    ) {
      // @TODO: Add error handling
      console.error('Sound event must be a non-empty string');

      return undefined;
    }
    result.sound_event = options.soundEvent;
  }

  return {
    'minecraft:durability_sensor': result,
  };
};
