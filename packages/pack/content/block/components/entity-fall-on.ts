import { EntityFallOnComponent } from '../interfaces/block-config';

/**
 * Creates an entity_fall_on component for Minecraft blocks
 * @param options The entity fall on options
 * @returns The entity_fall_on component in Minecraft format or undefined if validation fails
 */
export const createEntityFallOn = (
  options?: EntityFallOnComponent,
): { 'minecraft:entity_fall_on': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  const result: any = {};

  if (options.minFallDistance !== undefined) {
    if (
      typeof options.minFallDistance !== 'number' ||
      options.minFallDistance < 0
    ) {
      // @TODO: Add error handling
      console.error('Minimum fall distance must be a non-negative number');

      return undefined;
    }
    result.min_fall_distance = options.minFallDistance;
  }

  return {
    'minecraft:entity_fall_on': result,
  };
};
