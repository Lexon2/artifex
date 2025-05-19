import { IsChestedComponent } from '../../../interfaces/components/states/is-chested-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsChestedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsChestedComponent = (
  component: Partial<IsChestedComponent>
): { 'minecraft:is_chested': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_chested': result
  };
};
