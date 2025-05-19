import { BodyRotationAxisAlignedComponent } from '../../../interfaces/components/physical/body-rotation-axis-aligned-component';
import { validateBoolean } from '../../common/validation';

/**
 * Converts a BodyRotationAxisAlignedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertBodyRotationAxisAlignedComponent = (
  component: Partial<BodyRotationAxisAlignedComponent>
): { 'minecraft:body_rotation_axis_aligned': any } | undefined => {
  if (!component) {
    return undefined;
  }

  if (component.value === undefined) {
    return {
      'minecraft:body_rotation_axis_aligned': {},
    };
  }

  if (!validateBoolean(component.value, 'value')) {
    return undefined;
  }

  return {
    'minecraft:body_rotation_axis_aligned': {},
  };
};
