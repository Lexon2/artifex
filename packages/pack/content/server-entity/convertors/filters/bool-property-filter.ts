import { convertFilterBase } from './common/convert-filter-base';
import { BoolPropertyFilter } from '../../interfaces/filters/bool-property-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';
import { validateString } from '../common/validation';

/**
 * Converts a BoolPropertyFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertBoolPropertyFilter = (
  filter: Partial<BoolPropertyFilter>
): MinecraftJsonFilter | undefined => {
  if (!filter) {
    return undefined;
  }

  if (!filter.domain || !validateString(filter.domain, 'domain')) {
    return undefined;
  }

  const baseResult = convertFilterBase(filter);
  if (!baseResult) {
    return undefined;
  }

  const result: MinecraftJsonFilter = {
    ...baseResult,
    test: 'bool_property',
    domain: filter.domain
  };

  if (filter.value !== undefined) {
    result.value = filter.value;
  }

  return result;
};
