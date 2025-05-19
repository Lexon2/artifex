import { TransformationComponent } from '../interfaces/block-config';

/**
 * Creates a transformation component for Minecraft blocks
 * @param options The transformation options
 * @returns The transformation component in Minecraft format or undefined if validation fails
 */
export const createTransformation = (
  options?: TransformationComponent,
): { 'minecraft:transformation': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  const result: any = {};

  // Validate and add rotation
  if (options.rotation !== undefined) {
    if (
      !Array.isArray(options.rotation) ||
      options.rotation.length !== 3 ||
      !options.rotation.every((val) => typeof val === 'number')
    ) {
      // @TODO: Add error handling
      console.error('Rotation must be a Vector3 array with 3 numeric values');

      return undefined;
    }
    result.rotation = options.rotation;
  }

  // Validate and add translation
  if (options.translation !== undefined) {
    if (
      !Array.isArray(options.translation) ||
      options.translation.length !== 3 ||
      !options.translation.every((val) => typeof val === 'number')
    ) {
      // @TODO: Add error handling
      console.error(
        'Translation must be a Vector3 array with 3 numeric values',
      );

      return undefined;
    }
    result.translation = options.translation;
  }

  // Validate and add scale
  if (options.scale !== undefined) {
    if (
      !Array.isArray(options.scale) ||
      options.scale.length !== 3 ||
      !options.scale.every((val) => typeof val === 'number')
    ) {
      // @TODO: Add error handling
      console.error('Scale must be a Vector3 array with 3 numeric values');

      return undefined;
    }
    result.scale = options.scale;
  }

  // Validate and add scale_pivot
  if (options.scalePivot !== undefined) {
    if (
      !Array.isArray(options.scalePivot) ||
      options.scalePivot.length !== 3 ||
      !options.scalePivot.every((val) => typeof val === 'number')
    ) {
      // @TODO: Add error handling
      console.error(
        'Scale pivot must be a Vector3 array with 3 numeric values',
      );

      return undefined;
    }
    result.scale_pivot = options.scalePivot;
  }

  // Validate and add rotation_pivot
  if (options.rotationPivot !== undefined) {
    if (
      !Array.isArray(options.rotationPivot) ||
      options.rotationPivot.length !== 3 ||
      !options.rotationPivot.every((val) => typeof val === 'number')
    ) {
      // @TODO: Add error handling
      console.error(
        'Rotation pivot must be a Vector3 array with 3 numeric values',
      );

      return undefined;
    }
    result.rotation_pivot = options.rotationPivot;
  }

  return {
    'minecraft:transformation': result,
  };
};
