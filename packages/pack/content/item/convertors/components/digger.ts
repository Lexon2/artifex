interface DestroySpeed {
  speed: number;
  block: string;
}

interface DiggerOptions {
  useEfficiency?: boolean;
  destroySpeeds: DestroySpeed[];
}

/**
 * Creates a digger component for Minecraft items
 * @param options The digger options
 * @returns The digger component in Minecraft format or undefined if validation fails
 */
export const createDigger = (
  options?: DiggerOptions,
): { 'minecraft:digger': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (
    !Array.isArray(options.destroySpeeds) ||
    options.destroySpeeds.length === 0
  ) {
    // @TODO: Add error handling
    console.error('Destroy speeds must be a non-empty array');

    return undefined;
  }

  const result: any = {
    destroy_speeds: options.destroySpeeds.map((speed) => {
      if (typeof speed.speed !== 'number' || speed.speed <= 0) {
        console.warn('Destroy speed must be a positive number');
      }

      if (typeof speed.block !== 'string' || speed.block.length === 0) {
        console.warn('Block must be a non-empty string');
      }

      return {
        speed: speed.speed,
        block: speed.block,
      };
    }),
  };

  if (typeof options.useEfficiency === 'boolean') {
    result.use_efficiency = options.useEfficiency;
  }

  return {
    'minecraft:digger': result,
  };
};
