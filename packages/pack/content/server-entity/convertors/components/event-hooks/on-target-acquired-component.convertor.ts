import { OnTargetAcquiredComponent } from '../../../interfaces/components/event-hooks/on-target-acquired-component';
import { convertTrigger } from '../../common/trigger.convertor';

/**
 * Converts an OnTargetAcquiredComponent to Minecraft format
 * @param component The component to convert
 * @returns The converted component in Minecraft format or undefined if validation fails
 */
export const convertOnTargetAcquiredComponent = (
  component: Partial<OnTargetAcquiredComponent>
): { 'minecraft:on_target_acquired': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = convertTrigger(component);
  if (!result) {
    return undefined;
  }


  return {
    'minecraft:on_target_acquired': result,
  };
};
