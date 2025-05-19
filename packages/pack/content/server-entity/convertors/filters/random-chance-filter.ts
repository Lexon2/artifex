import { convertNumberFilter } from './common/convert-number-filter';
import { RandomChanceFilter } from '../../interfaces/filters/random-chance-filter';

/**
 * Converts a RandomChanceFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertRandomChanceFilter = (
  filter: Partial<RandomChanceFilter>
): ReturnType<typeof convertNumberFilter> | undefined => {
  if (!filter || filter.value === undefined) {
    return undefined;
  }
  return convertNumberFilter({
    ...filter,
    test: 'random_chance'
  });
};
