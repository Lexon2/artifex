import { RaidTriggerComponent } from '../../../interfaces/components/miscellaneous/raid-trigger-component';
import { convertTrigger } from '../../common/trigger.convertor';

/**
 * Converts a RaidTriggerComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertRaidTriggerComponent = (
  component: Partial<RaidTriggerComponent>
): { 'minecraft:raid_trigger': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = {};

  // Validate triggeredEvent
  if (component.triggeredEvent !== undefined) {
    const convertedTriggeredEvent = convertTrigger(component.triggeredEvent);
    if (!convertedTriggeredEvent) {
      return undefined;
    }
    result.triggered_event = convertedTriggeredEvent;
  }

  return {
    'minecraft:raid_trigger': result
  };
};
