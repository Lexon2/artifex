import {
  HurtOnConditionComponent,
  HurtOnConditionDamageCondition,
} from '../../../interfaces/components/miscellaneous/hurt-on-condition-component';
import { convertEntityFilters } from '../../common/filters.convertor';
import {
  validateDamageSourceType,
  validateNumber,
} from '../../common/validation';

/**
 * Validates a damage condition
 * @param condition The condition to validate
 * @param fieldName The name of the field for error messages
 * @returns Whether the condition is valid
 */
const validateDamageCondition = (
  condition: HurtOnConditionDamageCondition,
): any | undefined => {
  if (!condition) {
    return undefined;
  }

  const result: any = {};

  // Validate filters
  if (condition.filters !== undefined) {
    const convertedFilters = convertEntityFilters(condition.filters);
    if (!convertedFilters) {
      return undefined;
    }
    result.filters = convertedFilters;
  }

  // Validate cause
  if (condition.cause !== undefined) {
    if (!validateDamageSourceType(condition.cause, 'cause')) {
      return undefined;
    }
    result.cause = condition.cause;
  }

  // Validate damagePerTick
  if (condition.damagePerTick !== undefined) {
    if (
      !validateNumber(
        condition.damagePerTick,
        'damagePerTick',
        0,
        Number.MAX_VALUE,
      )
    ) {
      return undefined;
    }
    result.damage_per_tick = condition.damagePerTick;
  }

  return result;
};

/**
 * Converts a HurtOnConditionComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertHurtOnConditionComponent = (
  component: Partial<HurtOnConditionComponent>,
): { 'minecraft:hurt_on_condition': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = {};

  // Validate damageConditions
  if (component.damageConditions !== undefined) {
    if (!Array.isArray(component.damageConditions)) {
      console.error('damageConditions must be an array');

      return undefined;
    }

    const validatedConditions = component.damageConditions.map((condition) => {
      if (!validateDamageCondition(condition)) {
        return undefined;
      }

      const validatedCondition: any = {};
      if (condition.filters !== undefined) {
        validatedCondition.filters = condition.filters;
      }
      if (condition.cause !== undefined) {
        validatedCondition.cause = condition.cause;
      }
      validatedCondition.damage_per_tick = condition.damagePerTick;

      return validatedCondition;
    });

    if (validatedConditions.includes(undefined)) {
      return undefined;
    }

    result.damage_conditions = validatedConditions;
  }

  return {
    'minecraft:hurt_on_condition': result,
  };
};
