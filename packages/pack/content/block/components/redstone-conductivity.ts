import { RedstoneConductivityComponent } from '../interfaces/block-config';

/**
 * Creates a redstone_conductivity component for Minecraft blocks
 * @param options The redstone conductivity options
 * @returns The redstone_conductivity component in Minecraft format or undefined if validation fails
 */
export const createRedstoneConductivity = (
  options?: RedstoneConductivityComponent,
): { 'minecraft:redstone_conductivity': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  const result: any = {};

  if (options.allowsWireToStepDown !== undefined) {
    if (typeof options.allowsWireToStepDown !== 'boolean') {
      // @TODO: Add error handling
      console.error('Allows wire to step down must be a boolean');

      return undefined;
    }
    result.allows_wire_to_step_down = options.allowsWireToStepDown;
  }

  if (options.redstoneConductor !== undefined) {
    if (typeof options.redstoneConductor !== 'boolean') {
      // @TODO: Add error handling
      console.error('Redstone conductor must be a boolean');

      return undefined;
    }
    result.redstone_conductor = options.redstoneConductor;
  }

  return {
    'minecraft:redstone_conductivity': result,
  };
};
