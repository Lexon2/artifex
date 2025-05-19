import { VibrationListenerComponent } from '../../../interfaces/components/miscellaneous/vibration-listener-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts a VibrationListenerComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertVibrationListenerComponent = (
  component: Partial<VibrationListenerComponent>
): { 'minecraft:vibration_listener': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:vibration_listener': result
  };
};
