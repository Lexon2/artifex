import { CanClimbComponent } from '../../../interfaces/components/navigation-movement/can-climb-component';

/**
 * Converts a CanClimbComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertCanClimbComponent = (
  component: Partial<CanClimbComponent>,
): { 'minecraft:can_climb': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  return {
    'minecraft:can_climb': {},
  };
};
