import { FloatsInLiquidComponent } from '../../../interfaces/components/navigation-movement/floats-in-liquid-component';

/**
 * Converts a FloatsInLiquidComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertFloatsInLiquidComponent = (
  component: Partial<FloatsInLiquidComponent>,
): { 'minecraft:floats_in_liquid': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  // Floats in liquid component has no properties, just return empty object
  return {
    'minecraft:floats_in_liquid': {},
  };
};
