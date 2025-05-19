import { IgnoreCannotBeAttackedComponent } from '../../../interfaces/components/combat/ignore-cannot-be-attacked-component';
import { convertEntityFilters } from '../../common/filters.convertor';

/**
 * Converts an IgnoreCannotBeAttackedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIgnoreCannotBeAttackedComponent = (
  component: Partial<IgnoreCannotBeAttackedComponent>,
): { 'minecraft:ignore_cannot_be_attacked': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = {};

  // Validate filters
  if (component.filters !== undefined) {
    const convertedFilters = convertEntityFilters(component.filters);
    if (!convertedFilters) {
      return undefined;
    }
    result.filters = convertedFilters;
  }

  return {
    'minecraft:ignore_cannot_be_attacked': result,
  };
};
