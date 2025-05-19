/**
 * Creates a friction component for Minecraft blocks
 * @param value The friction value (0.0-0.9)
 * @returns The friction component in Minecraft format or undefined if validation fails
 */
export const createFriction = (
  value?: number,
): { 'minecraft:friction': number } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'number' || value < 0 || value > 0.9) {
    // @TODO: Add error handling
    console.error('Friction must be a number between 0.0 and 0.9');

    return undefined;
  }

  return {
    'minecraft:friction': value,
  };
};
