/**
 * Creates a can_destroy_in_creative component for Minecraft items
 * @param value Whether the item can destroy blocks in creative mode
 * @returns The can_destroy_in_creative component in Minecraft format or undefined if validation fails
 */
export const createCanDestroyInCreative = (
  value?: boolean,
): { 'minecraft:can_destroy_in_creative': boolean } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    // @TODO: Add error handling
    console.error('Can destroy in creative must be a boolean');

    return undefined;
  }

  return {
    'minecraft:can_destroy_in_creative': value,
  };
};
