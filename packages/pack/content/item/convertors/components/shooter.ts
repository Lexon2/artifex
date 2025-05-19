interface AmmunitionItem {
  item: string;
  useOffhand?: boolean;
  searchInventory?: boolean;
  useInCreative?: boolean;
}

interface ShooterOptions {
  ammunition?: AmmunitionItem[];
  chargeOnDraw?: boolean;
  maxDrawDuration?: number;
  scalePowerByDrawDuration?: boolean;
}

/**
 * Creates a shooter component for Minecraft items
 * @param options The shooter options
 * @returns The shooter component in Minecraft format or undefined if validation fails
 */
export const createShooter = (
  options?: ShooterOptions,
): { 'minecraft:shooter': any } | undefined => {
  if (!options) {
    // Empty component is valid for shooter
    return undefined;
  }

  const result: any = {};

  if (Array.isArray(options.ammunition) && options.ammunition.length > 0) {
    result.ammunition = options.ammunition.map((ammo) => {
      if (typeof ammo.item !== 'string' || ammo.item.length === 0) {
        console.warn('Ammunition item must be a non-empty string');
      }

      const ammoResult: any = { item: ammo.item };

      if (ammo.useOffhand !== undefined) {
        if (typeof ammo.useOffhand !== 'boolean') {
          console.warn('Use offhand must be a boolean');
        } else {
          ammoResult.use_offhand = ammo.useOffhand;
        }
      }

      if (ammo.searchInventory !== undefined) {
        if (typeof ammo.searchInventory !== 'boolean') {
          console.warn('Search inventory must be a boolean');
        } else {
          ammoResult.search_inventory = ammo.searchInventory;
        }
      }

      if (ammo.useInCreative !== undefined) {
        if (typeof ammo.useInCreative !== 'boolean') {
          console.warn('Use in creative must be a boolean');
        } else {
          ammoResult.use_in_creative = ammo.useInCreative;
        }
      }

      return ammoResult;
    });
  }

  if (options.chargeOnDraw !== undefined) {
    if (typeof options.chargeOnDraw !== 'boolean') {
      // @TODO: Add error handling
      console.error('Charge on draw must be a boolean');

      return undefined;
    }
    result.charge_on_draw = options.chargeOnDraw;
  }

  if (options.maxDrawDuration !== undefined) {
    if (
      typeof options.maxDrawDuration !== 'number' ||
      options.maxDrawDuration <= 0
    ) {
      // @TODO: Add error handling
      console.error('Max draw duration must be a positive number');

      return undefined;
    }
    result.max_draw_duration = options.maxDrawDuration;
  }

  if (options.scalePowerByDrawDuration !== undefined) {
    if (typeof options.scalePowerByDrawDuration !== 'boolean') {
      // @TODO: Add error handling
      console.error('Scale power by draw duration must be a boolean');

      return undefined;
    }
    result.scale_power_by_draw_duration = options.scalePowerByDrawDuration;
  }

  return {
    'minecraft:shooter': result,
  };
};
