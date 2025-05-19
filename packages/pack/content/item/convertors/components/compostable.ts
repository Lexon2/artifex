interface CompostableOptions {
  compostingChance?: number;
}

/**
 * Creates a compostable component for Minecraft items
 * @param options The compostable options
 * @returns The compostable component in Minecraft format or undefined if validation fails
 */
export const createCompostable = (
  options?: CompostableOptions,
): { 'minecraft:compostable': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (typeof options.compostingChance !== 'number' || options.compostingChance < 1 || options.compostingChance > 100) {
    // @TODO: Add error handling
    console.error('Composting chance must be a number between 1 and 100');

    return undefined;
  }

  return {
    'minecraft:compostable': {
      composting_chance: options.compostingChance,
    },
  };
};
