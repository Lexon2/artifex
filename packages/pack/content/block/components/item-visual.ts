import {
  ItemVisualComponent,
} from '../interfaces/block-config';

/**
 * Creates an item_visual component for Minecraft blocks
 * @param options The item visual options
 * @returns The item_visual component in Minecraft format or undefined if validation fails
 */
export const createItemVisual = (
  options?: ItemVisualComponent,
): { 'minecraft:item_visual': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  if (typeof options !== 'object' || options === null) {
    // @TODO: Add error handling
    console.error('Item visual must be an object with valid properties');

    return undefined;
  }

  const result: any = {};

  // Validate and add geometry
  if (options.geometry === undefined) {
    // @TODO: Add error handling
    console.error('Geometry is required for item visual');

    return undefined;
  }

  if (typeof options.geometry === 'string') {
    if (options.geometry.length === 0) {
      // @TODO: Add error handling
      console.error('Geometry identifier must be a non-empty string');

      return undefined;
    }
    result.geometry = options.geometry;
  } else if (
    typeof options.geometry === 'object' &&
    options.geometry !== null
  ) {
    if (
      typeof options.geometry.identifier !== 'string' ||
      options.geometry.identifier.length === 0
    ) {
      // @TODO: Add error handling
      console.error('Geometry identifier must be a non-empty string');

      return undefined;
    }

    const geometryObj: any = {
      identifier: options.geometry.identifier,
    };

    // Add bone_visibility if present
    if (options.geometry.boneVisibility) {
      geometryObj.bone_visibility = {};
      for (const bone in options.geometry.boneVisibility) {
        geometryObj.bone_visibility[bone] =
          options.geometry.boneVisibility[bone];
      }
    }

    result.geometry = geometryObj;
  } else {
    // @TODO: Add error handling
    console.error(
      'Geometry must be a string or an object with valid properties',
    );

    return undefined;
  }

  // Validate and add material_instances
  if (options.materialInstances === undefined) {
    // @TODO: Add error handling
    console.error('Material instances are required for item visual');

    return undefined;
  }

  if (
    typeof options.materialInstances !== 'object' ||
    options.materialInstances === null
  ) {
    // @TODO: Add error handling
    console.error('Material instances must be an object');

    return undefined;
  }

  const materialInstances: any = {};

  for (const face in options.materialInstances) {
    const material = options.materialInstances[face];

    if (typeof material === 'string') {
      materialInstances[face] = material;
    } else if (typeof material === 'object' && material !== null) {
      const materialObj: any = {};

      if (material.texture) {
        materialObj.texture = material.texture;
      }

      if (material.renderMethod !== undefined) {
        materialObj.render_method = material.renderMethod;
      }

      if (material.faceDimming !== undefined) {
        materialObj.face_dimming = material.faceDimming;
      }

      if (material.ambientOcclusion !== undefined) {
        materialObj.ambient_occlusion = material.ambientOcclusion;
      }

      materialInstances[face] = materialObj;
    }
  }

  result.material_instances = materialInstances;

  return {
    'minecraft:item_visual': result,
  };
};
