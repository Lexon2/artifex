import { convertEntityFilters } from './filters.convertor';
import { ENTITY_EVENT_TARGETS } from '../../constants/event-target';
import { EntityEventTrigger } from '../../interfaces/trigger';

/**
 * Converts a Trigger to Minecraft format
 * @param trigger The trigger to convert
 * @returns The trigger in Minecraft format or undefined if validation fails
 */
export const convertTrigger = (
  trigger: Partial<EntityEventTrigger>,
): any | undefined => {
  if (!trigger) {
    return undefined;
  }

  const result: any = {};

  // Validate event
  if (trigger.event !== undefined) {
    if (typeof trigger.event !== 'string') {
      return undefined;
    }
    result.event = trigger.event;
  }

  // Validate target
  if (trigger.target !== undefined) {
    if (!ENTITY_EVENT_TARGETS.includes(trigger.target)) {
      return undefined;
    }
    result.target = trigger.target;
  }

  // Validate filters
  if (trigger.filters !== undefined) {
    const convertedFilters = convertEntityFilters(trigger.filters);
    if (!convertedFilters) {
      return undefined;
    }
    result.filters = convertedFilters;
  }

  return result;
};
