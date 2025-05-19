import { OnHurtByPlayerComponent } from '../../../interfaces/components/event-hooks/on-hurt-by-player-component';
import { convertTrigger } from '../../common/trigger.convertor';

/**
 * Converts an OnHurtByPlayerComponent to Minecraft format
 * @param component The component to convert
 * @returns The converted component in Minecraft format or undefined if validation fails
 */
export const convertOnHurtByPlayerComponent = (
  component: Partial<OnHurtByPlayerComponent>
): { 'minecraft:on_hurt_by_player': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = convertTrigger(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:on_hurt_by_player': result,
  };
};
