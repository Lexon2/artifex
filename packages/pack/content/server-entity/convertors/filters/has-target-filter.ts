import { convertBooleanFilter } from './common/convert-boolean-filter';
import { HasTargetFilter } from '../../interfaces/filters/has-target-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';

/**
 * Converts a HasTargetFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertHasTargetFilter = (
  filter: Partial<HasTargetFilter>
): MinecraftJsonFilter | undefined => {
  return convertBooleanFilter({
    ...filter,
    test: 'has_target'
  });
};
