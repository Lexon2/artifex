import { CanFlyComponent } from '../../../interfaces/components/navigation-movement/can-fly-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts a CanFlyComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertCanFlyComponent = (
  component: Partial<CanFlyComponent>,
): { 'minecraft:can_fly': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);

  return {
    'minecraft:can_fly': result,
  };
};
