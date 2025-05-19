import { convertFilterBase } from './common/convert-filter-base';
import { FILTER_EQUIPMENT_SLOTS } from '../../constants/equipment-slots';
import { HasDamagedEquipmentFilter } from '../../interfaces/filters/has-damaged-equipment-filter';
import { MinecraftJsonFilter } from '../../interfaces/filters/minecraft-json-filter';
import { validateString } from '../common/validation';
import { validateAllowedValues } from '../common/validation';

/**
 * Converts a HasDamagedEquipmentFilter to Minecraft format
 * @param filter The filter to convert
 * @returns The filter in Minecraft format or undefined if validation fails
 */
export const convertHasDamagedEquipmentFilter = (
  filter: Partial<HasDamagedEquipmentFilter>
): MinecraftJsonFilter | undefined => {
  if (!filter) {
    return undefined;
  }

  // Validate value property
  if (filter.value === undefined || !validateString(filter.value, 'value')) {
    return undefined;
  }

  // Validate optional domain property
  if (filter.domain !== undefined &&
      !validateAllowedValues(filter.domain, FILTER_EQUIPMENT_SLOTS, 'domain')) {
    return undefined;
  }

  const baseResult = convertFilterBase(filter);
  if (!baseResult) {
    return undefined;
  }

  const result: MinecraftJsonFilter = {
    ...baseResult,
    test: 'has_damaged_equipment',
    value: filter.value
  };

  if (filter.domain !== undefined) {
    result.domain = filter.domain;
  }

  return result;
};
