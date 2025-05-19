interface EntityPlacerOptions {
  entity: string;
  dispenseOn?: string[];
  useOn?: string[];
}

/**
 * Creates an entity_placer component for Minecraft items
 * @param options The entity placer options
 * @returns The entity_placer component in Minecraft format or undefined if validation fails
 */
export const createEntityPlacer = (
  options?: EntityPlacerOptions,
): { 'minecraft:entity_placer': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (typeof options.entity !== 'string' || options.entity.length === 0) {
    // @TODO: Add error handling
    console.error('Entity must be a non-empty string');

    return undefined;
  }

  const result: any = {
    entity: options.entity,
  };

  // Process dispense_on array if provided
  if (
    Array.isArray(options.dispenseOn) &&
    options.dispenseOn.length > 0 &&
    options.dispenseOn.every((tag) => typeof tag === 'string')
  ) {
    result.dispense_on = options.dispenseOn;
  }

  // Process use_on array if provided
  if (
    Array.isArray(options.useOn) &&
    options.useOn.length > 0 &&
    options.useOn.every((tag) => typeof tag === 'string')
  ) {
    result.use_on = options.useOn;
  }

  return {
    'minecraft:entity_placer': result,
  };
};
