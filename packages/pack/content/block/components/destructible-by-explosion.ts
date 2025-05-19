import { DestructibleByExplosionComponent } from '../interfaces/block-config';

/**
 * Creates a destructible_by_explosion component for Minecraft blocks
 * @param options The destructible by explosion options or boolean for simplified usage
 * @returns The destructible_by_explosion component in Minecraft format or undefined if validation fails
 */
export const createDestructibleByExplosion = (
  options?: boolean | DestructibleByExplosionComponent,
): { 'minecraft:destructible_by_explosion': boolean | any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  // Handle boolean case (true means default destructible, false means not destructible)
  if (typeof options === 'boolean') {
    return {
      'minecraft:destructible_by_explosion': options,
    };
  }

  // Handle object case
  if (typeof options === 'object' && options !== null) {
    const result: any = {};

    // Validate and add explosion_resistance
    if (options.explosionResistance !== undefined) {
      if (
        typeof options.explosionResistance !== 'number' ||
        options.explosionResistance < 0
      ) {
        // @TODO: Add error handling
        console.error('Explosion resistance must be a non-negative number');

        return undefined;
      }
      result.explosion_resistance = options.explosionResistance;
    }

    return {
      'minecraft:destructible_by_explosion': result,
    };
  }

  // @TODO: Add error handling
  console.error(
    'Destructible by explosion must be a boolean or an object with valid properties',
  );

  return undefined;
};
