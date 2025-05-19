interface FoodOptions {
  canAlwaysEat?: boolean;
  nutrition?: number;
  saturationModifier?: number;
  usingConvertsTo?: string;
}

/**
 * Creates a food component for Minecraft items
 * @param options The food options
 * @returns The food component in Minecraft format or undefined if validation fails
 */
export const createFood = (
  options?: FoodOptions,
): { 'minecraft:food': any } | undefined => {
  if (!options) {
    // Empty object is valid for food
    return undefined;
  }

  const result: any = {};

  if (options.nutrition !== undefined) {
    if (typeof options.nutrition !== 'number' || options.nutrition < 0) {
      // @TODO: Add error handling
      console.error('Nutrition must be a non-negative number');

      return undefined;
    }
    result.nutrition = options.nutrition;
  }

  if (options.saturationModifier !== undefined) {
    if (typeof options.saturationModifier !== 'number') {
      // @TODO: Add error handling
      console.error('Saturation modifier must be a number');

      return undefined;
    }
    result.saturation_modifier = options.saturationModifier;
  }

  if (options.canAlwaysEat !== undefined) {
    if (typeof options.canAlwaysEat !== 'boolean') {
      // @TODO: Add error handling
      console.error('Can always eat must be a boolean');

      return undefined;
    }
    result.can_always_eat = options.canAlwaysEat;
  }

  if (options.usingConvertsTo !== undefined) {
    if (
      typeof options.usingConvertsTo !== 'string' ||
      options.usingConvertsTo.length === 0
    ) {
      // @TODO: Add error handling
      console.error('Using converts to must be a non-empty string');

      return undefined;
    }
    result.using_converts_to = options.usingConvertsTo;
  }

  return {
    'minecraft:food': result,
  };
};
