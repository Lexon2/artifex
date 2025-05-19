import { CannotBeAttackedComponent } from '../../../interfaces/components/combat/cannot-be-attacked-component';

/**
 * Converts a CannotBeAttackedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertCannotBeAttackedComponent = (
  component: Partial<CannotBeAttackedComponent>,
): { 'minecraft:cannot_be_attacked': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Cannot be attacked component has no properties, just return empty object
  return {
    'minecraft:cannot_be_attacked': {},
  };
};
