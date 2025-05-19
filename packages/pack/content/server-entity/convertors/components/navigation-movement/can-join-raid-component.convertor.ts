import { CanJoinRaidComponent } from '../../../interfaces/components/navigation-movement/can-join-raid-component';

/**
 * Converts a CanJoinRaidComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertCanJoinRaidComponent = (
  component: Partial<CanJoinRaidComponent>,
): { 'minecraft:can_join_raid': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Can join raid component has no properties, just return empty object
  return {
    'minecraft:can_join_raid': {},
  };
};
