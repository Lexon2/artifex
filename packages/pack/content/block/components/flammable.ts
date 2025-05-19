import { FlammableComponent } from '../interfaces/block-config';

/**
 * Creates a flammable component for Minecraft blocks
 * @param options The flammable options or boolean for simplified usage
 * @returns The flammable component in Minecraft format or undefined if validation fails
 */
export const createFlammable = (
  options?: boolean | FlammableComponent,
): { 'minecraft:flammable': boolean | any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  // Handle boolean case (true means default flammable, false means not flammable)
  if (typeof options === 'boolean') {
    return {
      'minecraft:flammable': options,
    };
  }

  // Handle object case
  if (typeof options === 'object' && options !== null) {
    const result: any = {};

    // Validate and add catch_chance_modifier
    if (options.catchChanceModifier !== undefined) {
      if (typeof options.catchChanceModifier !== 'number') {
        // @TODO: Add error handling
        console.error('Catch chance modifier must be a number');

        return undefined;
      }
      result.catch_chance_modifier = options.catchChanceModifier;
    }

    // Validate and add destroy_chance_modifier
    if (options.destroyChanceModifier !== undefined) {
      if (typeof options.destroyChanceModifier !== 'number') {
        // @TODO: Add error handling
        console.error('Destroy chance modifier must be a number');

        return undefined;
      }
      result.destroy_chance_modifier = options.destroyChanceModifier;
    }

    return {
      'minecraft:flammable': result,
    };
  }

  // @TODO: Add error handling
  console.error(
    'Flammable must be a boolean or an object with valid properties',
  );

  return undefined;
};
