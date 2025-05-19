
import { DragonChargePlayerBehavior } from '../../interfaces/behaviors/dragon-charge-player-behavior';
import { validateNumber } from '../common/validation';

export const convertDragonChargePlayerBehavior = (
  behavior: Partial<DragonChargePlayerBehavior>
): { 'minecraft:behavior.dragonchargeplayer': any } | undefined => {
  if (!behavior) {
    return undefined;
  }

  const result: any = {};

  // Validate priority
  if (behavior.priority !== undefined) {
    if (!validateNumber(behavior.priority, 'priority')) {
      return undefined;
    }
  }

  // Validate activeSpeed
  if (behavior.activeSpeed !== undefined) {
    if (!validateNumber(behavior.activeSpeed, 'activeSpeed')) {
      return undefined;
    }
  }

  // Validate continueChargeThresholdTime
  if (behavior.continueChargeThresholdTime !== undefined) {
    if (!validateNumber(behavior.continueChargeThresholdTime, 'continueChargeThresholdTime')) {
      return undefined;
    }
  }

  // Validate flightSpeed
  if (behavior.flightSpeed !== undefined) {
    if (!validateNumber(behavior.flightSpeed, 'flightSpeed')) {
      return undefined;
    }
  }

  // Validate targetZone
  if (behavior.targetZone !== undefined) {
    if (!validateNumber(behavior.targetZone, 'targetZone')) {
      return undefined;
    }
    result.target_zone = behavior.targetZone;
  }

  // Validate turnSpeed
  if (behavior.turnSpeed !== undefined) {
    if (!validateNumber(behavior.turnSpeed, 'turnSpeed')) {
      return undefined;
    }
  }

  return {
    'minecraft:behavior.dragonchargeplayer': result,
  };
}
