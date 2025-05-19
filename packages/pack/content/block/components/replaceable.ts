/**
 * Creates a replaceable component for Minecraft blocks
 * @param value Whether the block can be replaced when another block is placed
 * @returns The replaceable component in Minecraft format or undefined if validation fails
 */
export const createReplaceable = (
  value?: boolean,
): { 'minecraft:replaceable': object } | undefined => {
  if (value === undefined || value === false) {
    return undefined;
  }

  // The replaceable component only needs to exist, it doesn't have properties
  return {
    'minecraft:replaceable': {},
  };
};
