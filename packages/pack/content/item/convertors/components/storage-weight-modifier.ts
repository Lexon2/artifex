interface StorageWeightModifierOptions {
  weightInStorageItem?: number;
}

/**
 * Creates a storage_weight_modifier component for Minecraft items
 * @param options The storage weight modifier options
 * @returns The storage_weight_modifier component in Minecraft format or undefined if validation fails
 */
export const createStorageWeightModifier = (
  options?: StorageWeightModifierOptions,
): { 'minecraft:storage_weight_modifier': any } | undefined => {
  if (!options) {
    // Empty component is valid for storage_weight_modifier
    return undefined;
  }

  const result: any = {};

  if (options.weightInStorageItem !== undefined) {
    if (
      typeof options.weightInStorageItem !== 'number' ||
      options.weightInStorageItem < 0
    ) {
      // @TODO: Add error handling
      console.error('Weight in storage item must be a non-negative number');

      return undefined;
    }
    result.weight_in_storage_item = options.weightInStorageItem;
  }

  return {
    'minecraft:storage_weight_modifier': result,
  };
};
