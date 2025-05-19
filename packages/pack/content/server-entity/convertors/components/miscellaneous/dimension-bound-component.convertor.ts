import { DimensionBoundComponent } from '../../../interfaces/components/miscellaneous/dimension-bound-component';

/**
 * Converts a DimensionBoundComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertDimensionBoundComponent = (
  component: Partial<DimensionBoundComponent>,
): { 'minecraft:dimension_bound': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Dimension bound component has no properties, just return empty object
  return {
    'minecraft:dimension_bound': {},
  };
};
