/**
 * Interface for the pushable component
 * Defines what can push an entity between other entities and pistons.
 */
export interface PushableComponent {
  /**
   * Whether the entity can be pushed by other entities
   * @default true
   */
  isPushable?: boolean;

  /**
   * Whether the entity can be pushed by pistons safely
   * @default true
   */
  isPushableByPiston?: boolean;
}
