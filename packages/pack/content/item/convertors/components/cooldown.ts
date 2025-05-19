interface CooldownOptions {
  category: string;
  duration: number;
}

/**
 * Creates a cooldown component for Minecraft items
 * @param options The cooldown options
 * @returns The cooldown component in Minecraft format or undefined if validation fails
 */
export const createCooldown = (
  options?: CooldownOptions,
): { 'minecraft:cooldown': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (typeof options.category !== 'string' || options.category.length === 0) {
    // @TODO: Add error handling
    console.error('Cooldown category must be a non-empty string');

    return undefined;
  }

  if (typeof options.duration !== 'number' || options.duration <= 0) {
    // @TODO: Add error handling
    console.error('Cooldown duration must be a positive number');

    return undefined;
  }

  return {
    'minecraft:cooldown': {
      category: options.category,
      duration: options.duration,
    },
  };
};
