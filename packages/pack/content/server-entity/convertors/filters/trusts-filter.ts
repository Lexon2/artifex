import { convertBooleanFilter } from './common/convert-boolean-filter';
import { TrustsFilter } from '../../interfaces/filters/trusts-filter';

/**
 * Converts a TrustsFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertTrustsFilter = (
  filter: Partial<TrustsFilter>
): ReturnType<typeof convertBooleanFilter> | undefined => {
  if (!filter || filter.value === undefined) {
    return undefined;
  }
  return convertBooleanFilter({
    ...filter,
    test: 'trusts'
  });
};
