import { convertBooleanFilter } from './common/convert-boolean-filter';
import { InLavaFilter } from '../../interfaces/filters/in-lava-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';

/**
 * Converts an InLavaFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertInLavaFilter = (
  filter: Partial<InLavaFilter>,
): MinecraftJsonFilter | undefined => {
  return convertBooleanFilter({
    ...filter,
    test: 'in_lava',
  });
};
