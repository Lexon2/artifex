interface FuelOptions {
  duration: number;
}

/**
 * Creates a fuel component for Minecraft items
 * @param options The fuel options
 * @returns The fuel component in Minecraft format or undefined if validation fails
 */
export const createFuel = (
  options?: FuelOptions,
): { 'minecraft:fuel': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (typeof options.duration !== 'number' || options.duration <= 0) {
    // @TODO: Add error handling
    console.error('Fuel duration must be a positive number');

    return undefined;
  }

  return {
    'minecraft:fuel': {
      duration: options.duration,
    },
  };
};
