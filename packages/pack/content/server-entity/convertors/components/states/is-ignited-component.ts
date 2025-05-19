import { IsIgnitedComponent } from '../../../interfaces/components/states/is-ignited-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsIgnitedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsIgnitedComponent = (
  component: Partial<IsIgnitedComponent>
): { 'minecraft:is_ignited': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_ignited': result
  };
};
