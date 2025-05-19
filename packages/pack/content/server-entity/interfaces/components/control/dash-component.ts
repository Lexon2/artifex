/**
 * Interface for the dash component
 * Ability for a ridable entity to dash.
 */
export interface DashComponent {
  /**
   * The dash cooldown in seconds
   * @default 1.0
   */
  cooldownTime?: number;

  /**
   * Horizontal momentum of the dash
   * @default 1.0
   */
  horizontalMomentum?: number;

  /**
   * Vertical momentum of the dash
   * @default 1.0
   */
  verticalMomentum?: number;
}
