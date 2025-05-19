/**
 * Creates a hand_equipped component for Minecraft items
 * @param value Whether the item is rendered in hand when equipped
 * @returns The hand_equipped component in Minecraft format or undefined if validation fails
 */
export const createHandEquipped = (
  value?: boolean,
): { 'minecraft:hand_equipped': boolean } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    // @TODO: Add error handling
    console.error('Hand equipped must be a boolean');

    return undefined;
  }

  return {
    'minecraft:hand_equipped': value,
  };
};
