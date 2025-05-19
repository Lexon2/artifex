import { convertEntityFilters } from './filters.convertor';
import { validateNumber } from './validation';
import { EntityDefinition, EntityTypes } from '../../types/entity-types';

export const convertEntityDefinition = (definitions: EntityTypes): any[] | undefined => {
  if (!definitions) {
    return undefined;
  }
  if (Array.isArray(definitions)) {
    return definitions.map(definition => convertSingleEntityDefinition(definition)).filter(definition => definition !== undefined);
  }
  return convertSingleEntityDefinition(definitions);
};

/**
 * Converts an EntityDefinition to Minecraft format
 * @param definition The entity definition to convert
 * @returns The entity definition in Minecraft format or undefined if validation fails
 */
export const convertSingleEntityDefinition = (
  definition: Partial<EntityDefinition>
): any | undefined => {
  if (!definition) {
    return undefined;
  }

  const result: any = {};

  // Validate filters
  if (definition.filters !== undefined) {
    const convertedFilters = convertEntityFilters(definition.filters);
    if (!convertedFilters) {
      return undefined;
    }
    result.filters = convertedFilters;
  }

  // Validate cooldown
  if (definition.cooldown !== undefined) {
    if (!validateNumber(definition.cooldown, 'cooldown')) {
      return undefined;
    }
    result.cooldown = definition.cooldown;
  }

  // Validate maxDist
  if (definition.maxDist !== undefined) {
    if (!validateNumber(definition.maxDist, 'maxDist')) {
      return undefined;
    }
    result.max_dist = definition.maxDist;
  }

  // Validate maxHeight
  if (definition.maxHeight !== undefined) {
    if (!validateNumber(definition.maxHeight, 'maxHeight')) {
      return undefined;
    }
    result.max_height = definition.maxHeight;
  }

  // Validate maxFlee
  if (definition.maxFlee !== undefined) {
    if (!validateNumber(definition.maxFlee, 'maxFlee')) {
      return undefined;
    }
    result.max_flee = definition.maxFlee;
  }

  // Validate priority
  if (definition.priority !== undefined) {
    if (!validateNumber(definition.priority, 'priority')) {
      return undefined;
    }
    result.priority = definition.priority;
  }

  // Validate withinDefault
  if (definition.withinDefault !== undefined) {
    if (!validateNumber(definition.withinDefault, 'withinDefault')) {
      return undefined;
    }
    result.within_default = definition.withinDefault;
  }

  // Validate checkIfOutnumbered
  if (definition.checkIfOutnumbered !== undefined) {
    if (typeof definition.checkIfOutnumbered !== 'boolean') {
      console.error('checkIfOutnumbered must be a boolean');

      return undefined;
    }
    result.check_if_outnumbered = definition.checkIfOutnumbered;
  }

  // Validate mustSee
  if (definition.mustSee !== undefined) {
    if (typeof definition.mustSee !== 'boolean') {
      console.error('mustSee must be a boolean');

      return undefined;
    }
    result.must_see = definition.mustSee;
  }

  // Validate mustSeeForgetDuration
  if (definition.mustSeeForgetDuration !== undefined) {
    if (!validateNumber(definition.mustSeeForgetDuration, 'mustSeeForgetDuration')) {
      return undefined;
    }
    result.must_see_forget_duration = definition.mustSeeForgetDuration;
  }

  // Validate reevaluateDescription
  if (definition.reevaluateDescription !== undefined) {
    if (typeof definition.reevaluateDescription !== 'boolean') {
      console.error('reevaluateDescription must be a boolean');

      return undefined;
    }
    result.reevaluate_description = definition.reevaluateDescription;
  }

  // Validate sprintSpeedMultiplier
  if (definition.sprintSpeedMultiplier !== undefined) {
    if (!validateNumber(definition.sprintSpeedMultiplier, 'sprintSpeedMultiplier')) {
      return undefined;
    }
    result.sprint_speed_multiplier = definition.sprintSpeedMultiplier;
  }

  // Validate walkSpeedMultiplier
  if (definition.walkSpeedMultiplier !== undefined) {
    if (!validateNumber(definition.walkSpeedMultiplier, 'walkSpeedMultiplier')) {
      return undefined;
    }
    result.walk_speed_multiplier = definition.walkSpeedMultiplier;
  }

  return result;
};
