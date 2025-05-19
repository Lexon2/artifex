import { InputAirControlledComponent } from '../../../interfaces/components/control/input-air-controlled-component';
import { validateNumber } from '../../common/validation';

/**
 * Converts an InputAirControlledComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertInputAirControlledComponent = (
  component: Partial<InputAirControlledComponent>,
): { 'minecraft:input_air_controlled': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = {};

  // Validate backwardsMovementModifier
  if (component.backwardsMovementModifier !== undefined) {
    if (
      !validateNumber(
        component.backwardsMovementModifier,
        'backwardsMovementModifier',
        0,
        Number.MAX_VALUE,
      )
    ) {
      return undefined;
    }
    result.backwards_movement_modifier = component.backwardsMovementModifier;
  }

  // Validate strafeSpeedModifier
  if (component.strafeSpeedModifier !== undefined) {
    if (
      !validateNumber(
        component.strafeSpeedModifier,
        'strafeSpeedModifier',
        0,
        Number.MAX_VALUE,
      )
    ) {
      return undefined;
    }
    result.strafe_speed_modifier = component.strafeSpeedModifier;
  }

  return {
    'minecraft:input_air_controlled': result,
  };
};
