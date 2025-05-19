export interface ItemSpecificSpeed {
  item: string;
  destroySpeed: number;
}

export interface DestructibleByMiningComponent {
  secondsToDestroy?: number;
  itemSpecificSpeeds?: ItemSpecificSpeed[];
}

/**
 * Creates a destructible_by_mining component for Minecraft blocks
 * @param options The destructible by mining options or boolean for simplified usage
 * @returns The destructible_by_mining component in Minecraft format or undefined if validation fails
 */
export const createDestructibleByMining = (
  options?: boolean | DestructibleByMiningComponent,
): { 'minecraft:destructible_by_mining': boolean | any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  // Handle boolean case (true means default destructible, false means not destructible)
  if (typeof options === 'boolean') {
    return {
      'minecraft:destructible_by_mining': options,
    };
  }

  // Handle object case
  if (typeof options === 'object' && options !== null) {
    const result: any = {};

    // Validate and add seconds_to_destroy
    if (options.secondsToDestroy !== undefined) {
      if (
        typeof options.secondsToDestroy !== 'number' ||
        options.secondsToDestroy < 0
      ) {
        // @TODO: Add error handling
        console.error('Seconds to destroy must be a non-negative number');

        return undefined;
      }
      result.seconds_to_destroy = options.secondsToDestroy;
    }

    // Validate and add item_specific_speeds
    if (Array.isArray(options.itemSpecificSpeeds)) {
      result.item_specific_speeds = [];

      for (const entry of options.itemSpecificSpeeds) {
        if (typeof entry !== 'object' || entry === null) {
          // @TODO: Add error handling
          console.error('Item specific speed entries must be objects');

          return undefined;
        }

        const itemSpeed: any = {};

        // Validate item
        if (!entry.item || typeof entry.item !== 'string') {
          // @TODO: Add error handling
          console.error('Item must be a non-empty string');

          return undefined;
        }
        itemSpeed.item = entry.item;

        // Validate destroy_speed
        if (typeof entry.destroySpeed !== 'number') {
          // @TODO: Add error handling
          console.error('Destroy speed must be a number');

          return undefined;
        }
        itemSpeed.destroy_speed = entry.destroySpeed;

        result.item_specific_speeds.push(itemSpeed);
      }
    }

    return {
      'minecraft:destructible_by_mining': result,
    };
  }

  // @TODO: Add error handling
  console.error(
    'Destructible by mining must be a boolean or an object with valid properties',
  );

  return undefined;
};
