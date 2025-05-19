import { InputGroundControlledComponent } from '../../../interfaces/components/control/input-ground-controlled-component';

/**
 * Converts an InputGroundControlledComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertInputGroundControlledComponent = (
  component: Partial<InputGroundControlledComponent>,
): { 'minecraft:input_ground_controlled': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Input ground controlled component has no properties, just return empty object
  return {
    'minecraft:input_ground_controlled': {},
  };
};
