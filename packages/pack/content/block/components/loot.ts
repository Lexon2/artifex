/**
 * Creates a loot component for Minecraft blocks
 * @param value The path to the loot table
 * @returns The loot component in Minecraft format or undefined if validation fails
 */
export const createLoot = (
  value?: string,
): { 'minecraft:loot': string } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'string' || value.length === 0) {
    // @TODO: Add error handling
    console.error('Loot must be a non-empty string path to a loot table');

    return undefined;
  }

  return {
    'minecraft:loot': value,
  };
};
