/**
 * Creates a light_emission component for Minecraft blocks
 * @param value The light emission value (0-15)
 * @returns The light_emission component in Minecraft format or undefined if validation fails
 */
export const createLightEmission = (
  value?: number,
): { 'minecraft:light_emission': number } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (
    typeof value !== 'number' ||
    value < 0 ||
    value > 15 ||
    !Number.isInteger(value)
  ) {
    // @TODO: Add error handling
    console.error('Light emission must be an integer between 0 and 15');

    return undefined;
  }

  return {
    'minecraft:light_emission': value,
  };
};
