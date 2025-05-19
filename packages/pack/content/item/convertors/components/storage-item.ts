interface StorageItemOptions {
  allowNestedStorageItems?: boolean;
  allowedItems?: string[];
  bannedItems?: string[];
  maxSlots?: number;
}

/**
 * Creates a storage_item component for Minecraft items
 * @param options The storage item options
 * @returns The storage_item component in Minecraft format or undefined if validation fails
 */
export const createStorageItem = (
  options?: StorageItemOptions,
): { 'minecraft:storage_item': any } | undefined => {
  if (!options) {
    // Empty component is valid for storage_item
    return undefined;
  }

  const result: any = {};

  if (options.allowNestedStorageItems !== undefined) {
    if (typeof options.allowNestedStorageItems !== 'boolean') {
      // @TODO: Add error handling
      console.error('Allow nested storage items must be a boolean');

      return undefined;
    }
    result.allow_nested_storage_items = options.allowNestedStorageItems;
  }

  if (options.maxSlots !== undefined) {
    if (
      typeof options.maxSlots !== 'number' ||
      options.maxSlots <= 0 ||
      options.maxSlots > 64
    ) {
      // @TODO: Add error handling
      console.error('Max slots must be a positive number');

      return undefined;
    }
    result.max_slots = options.maxSlots;
  }

  if (Array.isArray(options.allowedItems)) {
    // Validate all items are strings
    for (const item of options.allowedItems) {
      if (typeof item !== 'string' || item.length === 0) {
        // @TODO: Add error handling
        console.error('Allowed items must be non-empty strings');

        return undefined;
      }
    }
    result.allowed_items = options.allowedItems;
  }

  if (Array.isArray(options.bannedItems)) {
    // Validate all items are strings
    for (const item of options.bannedItems) {
      if (typeof item !== 'string' || item.length === 0) {
        // @TODO: Add error handling
        console.error('Banned items must be non-empty strings');

        return undefined;
      }
    }
    result.banned_items = options.bannedItems;
  }

  return {
    'minecraft:storage_item': result,
  };
};
