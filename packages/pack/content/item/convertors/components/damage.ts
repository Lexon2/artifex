/**
 * Creates a damage component for Minecraft items
 * @param value The damage value for the item
 * @returns The damage component in Minecraft format or undefined if validation fails
 */
export const createDamage = (
  value?: number,
): { 'minecraft:damage': number } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'number' || value < 0) {
    // @TODO: Add error handling
    console.error('Damage must be a positive number');

    return undefined;
  }

  return {
    'minecraft:damage': value,
  };
};
