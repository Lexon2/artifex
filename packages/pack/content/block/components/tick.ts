import { TickComponent } from '../interfaces/block-config';

/**
 * Creates a tick component for Minecraft blocks
 * @param options The tick options
 * @returns The tick component in Minecraft format or undefined if validation fails
 */
export const createTick = (
  options?: TickComponent,
): { 'minecraft:tick': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  const result: any = {};

  if (options.looping !== undefined) {
    if (typeof options.looping !== 'boolean') {
      // @TODO: Add error handling
      console.error('Looping must be a boolean');

      return undefined;
    }
    result.looping = options.looping;
  }

  if (options.intervalRange !== undefined) {
    if (
      !Array.isArray(options.intervalRange) ||
      options.intervalRange.length !== 2 ||
      !options.intervalRange.every((val) => typeof val === 'number') ||
      options.intervalRange[0] > options.intervalRange[1]
    ) {
      // @TODO: Add error handling
      console.error(
        'Interval range must be an array with two numbers, where first ≤ second',
      );

      return undefined;
    }
    result.interval_range = options.intervalRange;
  }

  return {
    'minecraft:tick': result,
  };
};
