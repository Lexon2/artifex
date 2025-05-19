import { FireImmuneComponent } from '../../../interfaces/components/miscellaneous/fire-immune-component';

/**
 * Converts a FireImmuneComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertFireImmuneComponent = (
  component: Partial<FireImmuneComponent>,
): { 'minecraft:fire_immune': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Fire immune component has no properties, just return empty object
  return {
    'minecraft:fire_immune': {},
  };
};
