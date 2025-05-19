/**
 * Creates a light_dampening component for Minecraft blocks
 * @param value The light dampening value (0-15)
 * @returns The light_dampening component in Minecraft format or undefined if validation fails
 */
export const createLightDampening = (
  value?: number,
): { 'minecraft:light_dampening': number } | undefined => {
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
    console.error('Light dampening must be an integer between 0 and 15');

    return undefined;
  }

  return {
    'minecraft:light_dampening': value,
  };
};
