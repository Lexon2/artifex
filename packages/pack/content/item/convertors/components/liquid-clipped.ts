/**
 * Creates a liquid_clipped component for Minecraft items
 * @param value Whether the item can be used in liquids
 * @returns The liquid_clipped component in Minecraft format or undefined if validation fails
 */
export const createLiquidClipped = (
  value?: boolean,
): { 'minecraft:liquid_clipped': boolean } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    // @TODO: Add error handling
    console.error('Liquid clipped must be a boolean');

    return undefined;
  }

  return {
    'minecraft:liquid_clipped': value,
  };
};
