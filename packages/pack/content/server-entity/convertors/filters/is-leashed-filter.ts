import { convertBooleanFilter } from './common/convert-boolean-filter';
import { IsLeashedFilter } from '../../interfaces/filters/is-leashed-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';

/**
 * Converts a IsLeashedFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertIsLeashedFilter = (
  filter: Partial<IsLeashedFilter>
): MinecraftJsonFilter | undefined => {
  return convertBooleanFilter({
    ...filter,
    test: 'is_leashed'
  });
};
