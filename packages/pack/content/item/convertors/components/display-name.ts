export const createDisplayName = (
  name: string,
): { 'minecraft:display_name': any } | undefined => {
  if (typeof name !== 'string' || name.length === 0) {
    // @TODO: Add error handling
    console.error('Display name must be a non-empty string');

    return;
  }

  return {
    'minecraft:display_name': {
      value: name,
    },
  };
};
