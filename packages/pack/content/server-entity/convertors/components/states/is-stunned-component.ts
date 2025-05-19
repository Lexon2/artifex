import { IsStunnedComponent } from '../../../interfaces/components/states/is-stunned-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an IsStunnedComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertIsStunnedComponent = (
  component: Partial<IsStunnedComponent>
): { 'minecraft:is_stunned': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:is_stunned': result
  };
};
