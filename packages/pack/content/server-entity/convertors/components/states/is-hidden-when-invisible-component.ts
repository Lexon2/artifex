import { IsHiddenWhenInvisibleComponent } from '../../../interfaces/components/states/is-hidden-when-invisible-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsHiddenWhenInvisibleComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsHiddenWhenInvisibleComponent = (
  component: Partial<IsHiddenWhenInvisibleComponent>
): { 'minecraft:is_hidden_when_invisible': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_hidden_when_invisible': result
  };
};
