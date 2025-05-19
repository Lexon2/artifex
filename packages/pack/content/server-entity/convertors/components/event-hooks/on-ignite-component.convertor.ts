import { OnIgniteComponent } from '../../../interfaces/components/event-hooks/on-ignite-component';
import { convertTrigger } from '../../common/trigger.convertor';

/**
 * Converts an OnIgniteComponent to Minecraft format
 * @param component The component to convert
 * @returns The converted component in Minecraft format or undefined if validation fails
 */
export const convertOnIgniteComponent = (
  component: Partial<OnIgniteComponent>
): { 'minecraft:on_ignite': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = convertTrigger(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:on_ignite': result,
  };
};
