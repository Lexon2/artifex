interface DamageChance {
  min: number;
  max: number;
}

interface DurabilityOptions {
  maxDurability: number;
  damageChance?: DamageChance;
}

/**
 * Creates a durability component for Minecraft items
 * @param options The durability options
 * @returns The durability component in Minecraft format or undefined if validation fails
 */
export const createDurability = (
  options?: DurabilityOptions,
): { 'minecraft:durability': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (typeof options.maxDurability !== 'number' || options.maxDurability <= 0) {
    // @TODO: Add error handling
    console.error('Max durability must be a positive number');

    return undefined;
  }

  const result: any = {
    max_durability: options.maxDurability,
  };

  if (options.damageChance) {
    if (
      typeof options.damageChance.min !== 'number' ||
      typeof options.damageChance.max !== 'number' ||
      options.damageChance.min < 0 ||
      options.damageChance.max > 100 ||
      options.damageChance.min > options.damageChance.max
    ) {
      // @TODO: Add error handling
      console.error(
        'Damage chance must have valid min/max values between 0 and 100',
      );

      return undefined;
    }

    result.damage_chance = {
      min: options.damageChance.min,
      max: options.damageChance.max,
    };
  }

  return {
    'minecraft:durability': result,
  };
};
