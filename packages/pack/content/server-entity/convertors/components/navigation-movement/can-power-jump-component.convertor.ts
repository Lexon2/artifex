import { CanPowerJumpComponent } from '../../../interfaces/components/navigation-movement/can-power-jump-component';

/**
 * Converts a CanPowerJumpComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertCanPowerJumpComponent = (
  component: Partial<CanPowerJumpComponent>,
): { 'minecraft:can_power_jump': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  return {
    'minecraft:can_power_jump': {},
  };
};
