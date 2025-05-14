import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';

/**
 * Options for routing based on dimensions.
 */
export interface EventDimensionFromToIdRouteOption {
  /**
   * Dimension the player is moving from.
   */
  fromDimensionId?: MinecraftDimensionTypes;

  /**
   * Dimension the player is moving to.
   */
  toDimensionId?: MinecraftDimensionTypes;
}

export interface EventDimensionFromToIdsRouteOption {
  /**
   * Dimension ids the player is moving from.
   */
  fromDimensionId?: EventDimensionFromToIdRouteOption['fromDimensionId'][];

  /**
   * Dimension ids the player is moving to.
   */
  toDimensionId?: EventDimensionFromToIdRouteOption['toDimensionId'][];
}
