import { convertBooleanFilter } from './common/convert-boolean-filter';
import { IsHumidFilter } from '../../interfaces/filters/is-humid-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';

/**
 * Converts a IsHumidFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertIsHumidFilter = (
  filter: Partial<IsHumidFilter>
): MinecraftJsonFilter | undefined => {
  return convertBooleanFilter({
    ...filter,
    test: 'is_humid'
  });
};
