import { convertBooleanFilter } from './common/convert-boolean-filter';
import { InWaterFilter } from '../../interfaces/filters/in-water-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';

/**
 * Converts an InWaterFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertInWaterFilter = (
  filter: Partial<InWaterFilter>
): MinecraftJsonFilter | undefined => {
  return convertBooleanFilter({
    ...filter,
    test: 'in_water'
  });
};
