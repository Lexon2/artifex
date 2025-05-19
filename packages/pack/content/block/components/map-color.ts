import { ColorValue } from '../../common/types/color-value';
import { MapColorComponent } from '../interfaces/block-config';

/**
 * Creates a map_color component for Minecraft blocks
 * @param options The map color value or options object
 * @returns The map_color component in Minecraft format or undefined if validation fails
 */
export const createMapColor = (
  options?: MapColorComponent,
): { 'minecraft:map_color': ColorValue | any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  // Handle direct color value (string or RGB array)
  if (typeof options === 'string' || Array.isArray(options)) {
    if (typeof options === 'string') {
      if (options.length === 0) {
        // @TODO: Add error handling
        console.error('Map color string must not be empty');

        return undefined;
      }
    } else if (
      options.length !== 3 ||
      !options.every((val) => typeof val === 'number' && val >= 0 && val <= 255)
    ) {
      // @TODO: Add error handling
      console.error(
        'Map color RGB array must contain 3 values between 0 and 255',
      );

      return undefined;
    }

    return {
      'minecraft:map_color': options,
    };
  }

  // Handle object case
  if (typeof options === 'object' && options !== null) {
    if (!options.color) {
      // @TODO: Add error handling
      console.error('Map color object must have a color property');

      return undefined;
    }

    const result: any = {
      color: options.color,
    };

    if (options.tintMethod) {
      const validTintMethods = ['noise', 'underwater', 'sinusoidal'];
      if (!validTintMethods.includes(options.tintMethod)) {
        // @TODO: Add error handling
        console.error(
          'Tint method must be "noise", "underwater", or "sinusoidal"',
        );

        return undefined;
      }
      result.tint_method = options.tintMethod;
    }

    return {
      'minecraft:map_color': result,
    };
  }

  // @TODO: Add error handling
  console.error(
    'Map color must be a string, RGB array, or an object with valid properties',
  );

  return undefined;
};
