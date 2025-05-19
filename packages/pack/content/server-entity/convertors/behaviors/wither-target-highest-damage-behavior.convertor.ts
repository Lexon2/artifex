import { WitherTargetHighestDamageBehavior } from '../../interfaces/behaviors/wither-target-highest-damage-behavior';
import { convertEntityDefinition } from '../common/entity-definition.convertor';
import { validateNumber } from '../common/validation';

/**
 * Converts a WitherTargetHighestDamageBehavior to Minecraft format
 * @param behavior The behavior to convert
 * @returns The behavior in Minecraft format or undefined if validation fails
 */
export const convertWitherTargetHighestDamageBehavior = (
  behavior: Partial<WitherTargetHighestDamageBehavior>
): { 'minecraft:behavior.wither_target_highest_damage': any } | undefined => {
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

  // Validate entityTypes
  if (behavior.entityTypes !== undefined) {
    const convertedEntityTypes = convertEntityDefinition(behavior.entityTypes);
    if (!convertedEntityTypes) {
      return undefined;
    }
    result.entity_types = convertedEntityTypes;
  }

  return {
    'minecraft:behavior.wither_target_highest_damage': result
  };
};
