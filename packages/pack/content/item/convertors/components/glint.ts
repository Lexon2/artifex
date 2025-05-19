/**
 * Creates a glint component for Minecraft items
 * @param value Whether the item has an enchantment glint
 * @returns The glint component in Minecraft format or undefined if validation fails
 */
export const createGlint = (
  value?: boolean,
): { 'minecraft:glint': boolean } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    // @TODO: Add error handling
    console.error('Glint must be a boolean');

    return undefined;
  }

  return {
    'minecraft:glint': value,
  };
};
