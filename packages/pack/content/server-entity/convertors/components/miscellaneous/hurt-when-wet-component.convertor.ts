import { HurtWhenWetComponent } from '../../../interfaces/components/miscellaneous/hurt-when-wet-component';

/**
 * Converts a HurtWhenWetComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertHurtWhenWetComponent = (
  component: Partial<HurtWhenWetComponent>,
): { 'minecraft:hurt_when_wet': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Hurt when wet component has no properties, just return empty object
  return {
    'minecraft:hurt_when_wet': {},
  };
};
