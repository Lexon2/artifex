type Vector3 = [number, number, number];

interface CollisionBoxOptions {
  origin?: Vector3;
  size?: Vector3;
}

/**
 * Creates a collision_box component for Minecraft blocks
 * @param options The collision box options or boolean for simplified usage
 * @returns The collision_box component in Minecraft format or undefined if validation fails
 */
export const createCollisionBox = (
  options?: boolean | CollisionBoxOptions,
): { 'minecraft:collision_box': boolean | { origin: Vector3; size: Vector3 } } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  // Handle boolean case (true means default collision box, false means no collision box)
  if (typeof options === 'boolean') {
    return {
      'minecraft:collision_box': options,
    };
  }

  // Handle object case
  if (typeof options === 'object' && options !== null) {
    const result: any = {};

    // Validate and add origin
    if (options.origin !== undefined) {
      if (!Array.isArray(options.origin) || options.origin.length !== 3 ||
          !options.origin.every(val => typeof val === 'number')) {
        // @TODO: Add error handling
        console.error('Origin must be a Vector3 array with 3 numeric values');

        return undefined;
      }
      result.origin = options.origin;
    }

    // Validate and add size
    if (options.size !== undefined) {
      if (!Array.isArray(options.size) || options.size.length !== 3 ||
          !options.size.every(val => typeof val === 'number')) {
        // @TODO: Add error handling
        console.error('Size must be a Vector3 array with 3 numeric values');

        return undefined;
      }
      result.size = options.size;
    }

    return {
      'minecraft:collision_box': result,
    };
  }

  // @TODO: Add error handling
  console.error('Collision box must be a boolean or an object with valid properties');

  return undefined;
};
