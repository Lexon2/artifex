import { convertNumberFilter } from './common/convert-number-filter';
import { MoonPhaseFilter } from '../../interfaces/filters/moon-phase-filter';

/**
 * Converts a MoonPhaseFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertMoonPhaseFilter = (
  filter: Partial<MoonPhaseFilter>
): ReturnType<typeof convertNumberFilter> | undefined => {
  if (!filter || filter.value === undefined) {
    return undefined;
  }
  return convertNumberFilter({
    ...filter,
    test: 'moon_phase'
  });
};
