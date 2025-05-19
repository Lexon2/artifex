import { IsChargedComponent } from '../../../interfaces/components/states/is-charged-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsChargedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsChargedComponent = (
  component: Partial<IsChargedComponent>
): { 'minecraft:is_charged': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_charged': result
  };
};
