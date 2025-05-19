import { StateObject } from '../../../../common/interfaces/state-object';

/**
 * Interface for the body_rotation_axis_aligned component
 * Causes the entity's body to automatically rotate to align with the nearest cardinal direction based on its current facing direction.
 * Combining this with the "minecraft:body_rotation_blocked" component will cause the entity to align to the nearest cardinal direction and remain fixed in that orientation, regardless of future changes in its facing direction.
 */
export interface BodyRotationAxisAlignedComponent extends StateObject {
  /**
   * Whether the entity's body should automatically rotate to align with the nearest cardinal direction
   * @default true
   */
  value?: boolean;
}
