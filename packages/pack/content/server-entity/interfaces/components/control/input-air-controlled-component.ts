/**
 * Interface for the input_air_controlled component
 * When configured as a rideable entity, the entity will be controlled using WASD controls and mouse to move in three dimensions.
 */
export interface InputAirControlledComponent {
  /**
   * Modifies speed going backwards
   */
  backwardsMovementModifier?: number;

  /**
   * Modifies the strafe speed
   */
  strafeSpeedModifier?: number;
}
