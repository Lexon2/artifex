interface ProjectileOptions {
  projectileEntity: string;
  minimumCriticalPower?: number;
}

/**
 * Creates a projectile component for Minecraft items
 * @param options The projectile options
 * @returns The projectile component in Minecraft format or undefined if validation fails
 */
export const createProjectile = (
  options?: ProjectileOptions,
): { 'minecraft:projectile': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (
    typeof options.projectileEntity !== 'string' ||
    options.projectileEntity.length === 0
  ) {
    // @TODO: Add error handling
    console.error('Projectile entity must be a non-empty string');

    return undefined;
  }

  const result: any = {
    projectile_entity: options.projectileEntity,
  };

  if (options.minimumCriticalPower !== undefined) {
    if (
      typeof options.minimumCriticalPower !== 'number' ||
      options.minimumCriticalPower < 0
    ) {
      // @TODO: Add error handling
      console.error('Minimum critical power must be a non-negative number');

      return undefined;
    }
    result.minimum_critical_power = options.minimumCriticalPower;
  }

  return {
    'minecraft:projectile': result,
  };
};
