interface IconTextures {
  default: string;
  [key: string]: string;
}

type IconOptions = string | { textures: IconTextures };

/**
 * Creates an icon component for Minecraft items
 * @param options The icon options (string or object with textures)
 * @returns The icon component in Minecraft format or undefined if validation fails
 */
export const createIcon = (
  options?: IconOptions,
): { 'minecraft:icon': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  if (typeof options === 'string') {
    if (options.length === 0) {
      // @TODO: Add error handling
      console.error('Icon texture string must not be empty');

      return undefined;
    }
    return {
      'minecraft:icon': {
        textures: {
          default: options,
        },
      },
    };
  }

  if (typeof options === 'object' && options !== null && options.textures) {
    if (
      typeof options.textures.default !== 'string' ||
      options.textures.default.length === 0
    ) {
      // @TODO: Add error handling
      console.error('Icon textures must have a non-empty default property');

      return undefined;
    }

    // Validate all texture values are strings
    for (const key in options.textures) {
      if (
        typeof options.textures[key] !== 'string' ||
        options.textures[key].length === 0
      ) {
        // @TODO: Add error handling
        console.error(`Icon texture "${key}" must be a non-empty string`);

        return undefined;
      }
    }

    return {
      'minecraft:icon': {
        textures: options.textures,
      },
    };
  }

  // @TODO: Add error handling
  console.error('Icon must be a string or an object with textures');

  return undefined;
};
