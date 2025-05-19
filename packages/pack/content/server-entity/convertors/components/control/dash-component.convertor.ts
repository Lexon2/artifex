import { DashComponent } from '../../../interfaces/components/control/dash-component';
import { validateNumber } from '../../common/validation';

/**
 * Converts a DashComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertDashComponent = (
  component: Partial<DashComponent>,
): { 'minecraft:dash': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = {};

  // Validate cooldownTime
  if (component.cooldownTime !== undefined) {
    if (!validateNumber(component.cooldownTime, 'cooldownTime', 0, Number.MAX_VALUE)) {
      return undefined;
    }
    result.cooldown_time = component.cooldownTime;
  }

  // Validate horizontalMomentum
  if (component.horizontalMomentum !== undefined) {
    if (!validateNumber(component.horizontalMomentum, 'horizontalMomentum', -Number.MAX_VALUE, Number.MAX_VALUE)) {
      return undefined;
    }
    result.horizontal_momentum = component.horizontalMomentum;
  }

  // Validate verticalMomentum
  if (component.verticalMomentum !== undefined) {
    if (!validateNumber(component.verticalMomentum, 'verticalMomentum', -Number.MAX_VALUE, Number.MAX_VALUE)) {
      return undefined;
    }
    result.vertical_momentum = component.verticalMomentum;
  }

  return {
    'minecraft:dash': result,
  };
};
