import { convertNumberFilter } from './common/convert-number-filter';
import { MoonIntensityFilter } from '../../interfaces/filters/moon-intensity-filter';

/**
 * Converts a MoonIntensityFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertMoonIntensityFilter = (
  filter: Partial<MoonIntensityFilter>
): ReturnType<typeof convertNumberFilter> | undefined => {
  if (!filter || filter.value === undefined) {
    return undefined;
  }
  return convertNumberFilter({
    ...filter,
    test: 'moon_intensity'
  });
};
