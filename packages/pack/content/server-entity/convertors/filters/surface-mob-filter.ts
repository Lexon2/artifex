import { convertBooleanFilter } from './common/convert-boolean-filter';
import { SurfaceMobFilter } from '../../interfaces/filters/surface-mob-filter';

/**
 * Converts a SurfaceMobFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertSurfaceMobFilter = (
  filter: Partial<SurfaceMobFilter>
): ReturnType<typeof convertBooleanFilter> | undefined => {
  if (!filter || filter.value === undefined) {
    return undefined;
  }
  return convertBooleanFilter({
    ...filter,
    test: 'surface_mob'
  });
};
