/**
 * Creates a stacked_by_data component for Minecraft items
 * @param value Whether items with different data values can stack together
 * @returns The stacked_by_data component in Minecraft format or undefined if validation fails
 */
export const createStackedByData = (
  value?: boolean,
): { 'minecraft:stacked_by_data': boolean } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    // @TODO: Add error handling
    console.error('Stacked by data must be a boolean');

    return undefined;
  }

  return {
    'minecraft:stacked_by_data': value,
  };
};
