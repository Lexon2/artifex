interface ThrowableOptions {
  doSwingAnimation?: boolean;
  launchPowerScale?: number;
  maxDrawDuration?: number;
  minDrawDuration?: number;
  maxLaunchPower?: number;
  scalePowerByDrawDuration?: boolean;
}

/**
 * Creates a throwable component for Minecraft items
 * @param options The throwable options
 * @returns The throwable component in Minecraft format or undefined if validation fails
 */
export const createThrowable = (
  options?: ThrowableOptions,
): { 'minecraft:throwable': any } | undefined => {
  if (!options) {
    // Empty component is valid for throwable
    return undefined;
  }

  const result: any = {};

  if (options.doSwingAnimation !== undefined) {
    if (typeof options.doSwingAnimation !== 'boolean') {
      // @TODO: Add error handling
      console.error('Do swing animation must be a boolean');

      return undefined;
    }
    result.do_swing_animation = options.doSwingAnimation;
  }

  if (options.launchPowerScale !== undefined) {
    if (
      typeof options.launchPowerScale !== 'number' ||
      options.launchPowerScale < 0
    ) {
      // @TODO: Add error handling
      console.error('Launch power scale must be a positive number');

      return undefined;
    }
    result.launch_power_scale = options.launchPowerScale;
  }

  if (options.maxDrawDuration !== undefined) {
    if (
      typeof options.maxDrawDuration !== 'number' ||
      options.maxDrawDuration < 0
    ) {
      // @TODO: Add error handling
      console.error('Max draw duration must be a positive number');

      return undefined;
    }
    result.max_draw_duration = options.maxDrawDuration;
  }

  if (options.minDrawDuration !== undefined) {
    if (
      typeof options.minDrawDuration !== 'number' ||
      options.minDrawDuration < 0
    ) {
      // @TODO: Add error handling
      console.error('Min draw duration must be a non-negative number');

      return undefined;
    }
    result.min_draw_duration = options.minDrawDuration;
  }

  if (options.maxLaunchPower !== undefined) {
    if (
      typeof options.maxLaunchPower !== 'number' ||
      options.maxLaunchPower < 0
    ) {
      // @TODO: Add error handling
      console.error('Max launch power must be a positive number');

      return undefined;
    }
    result.max_launch_power = options.maxLaunchPower;
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
    'minecraft:throwable': result,
  };
};
