import { IsPregnantComponent } from '../../../interfaces/components/states/is-pregnant-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsPregnantComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsPregnantComponent = (
  component: Partial<IsPregnantComponent>
): { 'minecraft:is_pregnant': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_pregnant': result
  };
};
