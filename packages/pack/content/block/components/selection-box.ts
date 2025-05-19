import { SelectionBoxComponent } from '../interfaces/block-config';

/**
 * Creates a selection_box component for Minecraft blocks
 * @param options The selection box options or boolean for simplified usage
 * @returns The selection_box component in Minecraft format or undefined if validation fails
 */
export const createSelectionBox = (
  options?: boolean | SelectionBoxComponent,
): { 'minecraft:selection_box': boolean | any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  // Handle boolean case (true means default selection box, false means no selection box)
  if (typeof options === 'boolean') {
    return {
      'minecraft:selection_box': options,
    };
  }

  // Handle object case
  if (typeof options === 'object' && options !== null) {
    const result: any = {};

    // Validate and add origin
    if (options.origin !== undefined) {
      if (
        !Array.isArray(options.origin) ||
        options.origin.length !== 3 ||
        !options.origin.every((val) => typeof val === 'number')
      ) {
        // @TODO: Add error handling
        console.error('Origin must be a Vector3 array with 3 numeric values');

        return undefined;
      }
      result.origin = options.origin;
    }

    // Validate and add size
    if (options.size !== undefined) {
      if (
        !Array.isArray(options.size) ||
        options.size.length !== 3 ||
        !options.size.every((val) => typeof val === 'number')
      ) {
        // @TODO: Add error handling
        console.error('Size must be a Vector3 array with 3 numeric values');

        return undefined;
      }
      result.size = options.size;
    }

    return {
      'minecraft:selection_box': result,
    };
  }

  // @TODO: Add error handling
  console.error(
    'Selection box must be a boolean or an object with valid properties',
  );

  return undefined;
};
