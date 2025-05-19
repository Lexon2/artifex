import { IsBabyComponent } from '../../../interfaces/components/states/is-baby-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsBabyComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsBabyComponent = (
  component: Partial<IsBabyComponent>
): { 'minecraft:is_baby': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_baby': result
  };
};
