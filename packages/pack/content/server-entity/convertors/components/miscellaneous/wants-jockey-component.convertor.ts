import { WantsJockeyComponent } from '../../../interfaces/components/miscellaneous/wants-jockey-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts a WantsJockeyComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertWantsJockeyComponent = (
  component: Partial<WantsJockeyComponent>
): { 'minecraft:wants_jockey': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:wants_jockey': result
  };
};
