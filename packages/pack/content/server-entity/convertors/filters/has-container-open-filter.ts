import { convertBooleanFilter } from './common/convert-boolean-filter';
import { HasContainerOpenFilter } from '../../interfaces/filters/has-container-open-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';

/**
 * Converts a HasContainerOpenFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertHasContainerOpenFilter = (
  filter: Partial<HasContainerOpenFilter>
): MinecraftJsonFilter | undefined => {
  return convertBooleanFilter({
    ...filter,
    test: 'has_container_open'
  });
};
