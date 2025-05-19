import { HideComponent } from '../../../interfaces/components/miscellaneous/hide-component';

/**
 * Converts a HideComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertHideComponent = (
  component: Partial<HideComponent>,
): { 'minecraft:hide': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Hide component has no properties, just return empty object
  return {
    'minecraft:hide': {},
  };
};
