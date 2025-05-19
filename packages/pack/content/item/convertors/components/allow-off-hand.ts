/**
 * Creates an allow_off_hand component for Minecraft items
 * @param value Whether the item can be held in the off-hand slot
 * @returns The allow_off_hand component in Minecraft format or undefined if validation fails
 */
export const createAllowOffHand = (
  value?: boolean,
): { 'minecraft:allow_off_hand': boolean } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    // @TODO: Add error handling
    console.error('Allow off hand must be a boolean');

    return undefined;
  }

  return {
    'minecraft:allow_off_hand': value,
  };
};
