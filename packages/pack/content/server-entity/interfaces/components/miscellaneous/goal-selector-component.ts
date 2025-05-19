/**
 * Interface for the goal_selector component
 * Defines the AI goals and their priorities for an entity
 */
export interface GoalSelectorComponent {
  /**
   * List of goals that this entity can perform
   */
  goals?: Array<{
    /**
     * Priority of the goal (higher values = higher priority)
     */
    priority: number;

    /**
     * Name of the goal to execute
     */
    goal: string;

    /**
     * Whether the goal can only run one at a time
     */
    mustReach?: boolean;

    /**
     * Whether to continue running after success
     */
    mustSee?: boolean;

    /**
     * Whether to continue executing when interrupted
     */
    canUseItems?: boolean;

    /**
     * Whether to continue executing when not relevant but was running
     */
    avoidWater?: boolean;

    /**
     * Target selection method
     */
    targetSelectionMethod?: string;

    /**
     * Items required to execute this goal
     */
    targetRequiredItems?: string[];

    /**
     * Whether to restart the goal when completed
     */
    canContinue?: boolean;

    /**
     * Additional goal-specific parameters
     */
    [key: string]: any;
  }>;
}
