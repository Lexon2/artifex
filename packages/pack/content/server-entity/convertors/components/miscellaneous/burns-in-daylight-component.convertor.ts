import { BurnsInDaylightComponent } from '../../../interfaces/components/miscellaneous/burns-in-daylight-component';

/**
 * Converts a BurnsInDaylightComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertBurnsInDaylightComponent = (
  component: Partial<BurnsInDaylightComponent>,
): { 'minecraft:burns_in_daylight': any } | undefined => {
  if (!component || !component.value) {
    return undefined;
  }

  return {
    'minecraft:burns_in_daylight': {},
  };
};
