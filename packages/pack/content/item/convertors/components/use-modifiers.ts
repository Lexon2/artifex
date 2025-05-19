interface UseModifiersOptions {
  useDuration: number;
  movementModifier?: number;
}

/**
 * Creates a use_modifiers component for Minecraft items
 * @param options The use modifiers options
 * @returns The use_modifiers component in Minecraft format or undefined if validation fails
 */
export const createUseModifiers = (
  options?: UseModifiersOptions,
): { 'minecraft:use_modifiers': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (typeof options.useDuration !== 'number' || options.useDuration < 0) {
    // @TODO: Add error handling
    console.error('Use duration must be a positive number');

    return undefined;
  }

  const result: any = {
    use_duration: options.useDuration,
  };

  if (options.movementModifier !== undefined) {
    if (typeof options.movementModifier !== 'number') {
      // @TODO: Add error handling
      console.error('Movement modifier must be a number');

      return undefined;
    }
    result.movement_modifier = options.movementModifier;
  }

  return {
    'minecraft:use_modifiers': result,
  };
};

