import { DragonScanningBehavior } from '../../interfaces/behaviors/dragon-scanning-behavior';
import { validateNumber } from '../common/validation';

/**
 * Converts a DragonScanningBehavior to Minecraft format
 * @param behavior The behavior to convert
 * @returns The behavior in Minecraft format or undefined if validation fails
 */
export const convertDragonScanningBehavior = (
  behavior: Partial<DragonScanningBehavior>
): { 'minecraft:behavior.dragonscanning': any } | undefined => {
  if (!behavior) {
    return undefined;
  }

  const result: any = {};

  // Validate priority
  if (behavior.priority !== undefined) {
    if (!validateNumber(behavior.priority, 'priority')) {
      return undefined;
    }
    result.priority = behavior.priority;
  }

  return {
    'minecraft:behavior.dragonscanning': result
  };
};
