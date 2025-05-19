import { DestructionParticlesComponent } from '../interfaces/block-config';

/**
 * Creates a destruction_particles component for Minecraft blocks
 * @param options The destruction particles options
 * @returns The destruction_particles component in Minecraft format or undefined if validation fails
 */
export const createDestructionParticles = (
  options?: DestructionParticlesComponent,
): { 'minecraft:destruction_particles': any } | undefined => {
  if (!options) {
    // Empty component is valid for destruction_particles
    return undefined;
  }

  const result: any = {};

  // Validate and add texture
  if (options.texture !== undefined) {
    if (typeof options.texture !== 'string' || options.texture.length === 0) {
      // @TODO: Add error handling
      console.error('Texture must be a non-empty string');

      return undefined;
    }
    result.texture = options.texture;
  }

  // Validate and add tint_method
  if (options.tintMethod !== undefined) {
    const validTintMethods = ['noise', 'underwater', 'sinusoidal', null];
    if (!validTintMethods.includes(options.tintMethod as any)) {
      // @TODO: Add error handling
      console.error(
        'Tint method must be "noise", "underwater", "sinusoidal", or null',
      );

      return undefined;
    }
    result.tint_method = options.tintMethod;
  }

  return {
    'minecraft:destruction_particles': result,
  };
};
