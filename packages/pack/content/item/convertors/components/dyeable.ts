interface DyeableOptions {
  defaultColor?: string | [number, number, number];
}

/**
 * Creates a dyeable component for Minecraft items
 * @param options The dyeable options
 * @returns The dyeable component in Minecraft format or undefined if validation fails
 */
export const createDyeable = (
  options?: DyeableOptions,
): { 'minecraft:dyeable': any } | undefined => {
  if (!options) {
    // Empty component is valid for dyeable
    return undefined;
  }

  const result: any = {};

  if (options.defaultColor !== undefined) {
    if (typeof options.defaultColor === 'string') {
      const hexColorRegex = /^#([A-Fa-f0-9]{6})$/;

      if (
        options.defaultColor.length === 0 ||
        !hexColorRegex.test(options.defaultColor)
      ) {
        // @TODO: Add error handling
        console.error('Default color string must be a valid HEX color code');

        return undefined;
      }
      result.default_color = options.defaultColor;
    } else if (
      Array.isArray(options.defaultColor) &&
      options.defaultColor.length === 3
    ) {
      if (
        !options.defaultColor.every(
          (val) => typeof val === 'number' && val >= 0 && val <= 255,
        )
      ) {
        // @TODO: Add error handling
        console.error(
          'Default color RGB values must be numbers between 0 and 255',
        );

        return undefined;
      }
      result.default_color = options.defaultColor;
    } else {
      // @TODO: Add error handling
      console.error('Default color must be a string or RGB array of 3 numbers');

      return undefined;
    }
  }

  return {
    'minecraft:dyeable': result,
  };
};
