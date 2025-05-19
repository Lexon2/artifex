import { PushableComponent } from '../../../interfaces/components/physical/pushable-component';
import { validateBoolean } from '../../common/validation';

/**
 * Converts a PushableComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertPushableComponent = (
  component: Partial<PushableComponent>
): { 'minecraft:pushable': { is_pushable: boolean; is_pushable_by_piston: boolean } } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: { is_pushable: boolean; is_pushable_by_piston: boolean } = {
    is_pushable: true, // Default value
    is_pushable_by_piston: true // Default value
  };

  if (component.isPushable !== undefined) {
    if (!validateBoolean(component.isPushable, 'isPushable')) {
      return undefined;
    }
    result.is_pushable = component.isPushable;
  }

  if (component.isPushableByPiston !== undefined) {
    if (!validateBoolean(component.isPushableByPiston, 'isPushableByPiston')) {
      return undefined;
    }
    result.is_pushable_by_piston = component.isPushableByPiston;
  }

  return {
    'minecraft:pushable': result
  };
};
