import { convertBaseNavigation } from './base-navigation';
import { NavigationFlyComponent } from '../../../interfaces/components/navigation-movement/navigation-fly-component';

/**
 * Converts a NavigationFlyComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertNavigationFlyComponent = (
  component: Partial<NavigationFlyComponent>
): { 'minecraft:navigation.fly': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertBaseNavigation(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:navigation.fly': result
  };
};
