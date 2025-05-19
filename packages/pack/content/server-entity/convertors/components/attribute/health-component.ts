import { HealthComponent } from '../../../interfaces/components/attribute/health-component';
import { convertAttributeComponent } from '../../common/attribute';

/**
 * Converts a HealthComponent to Minecraft format
 * @param component The component to convert
 * @returns The converted component in Minecraft format or undefined if validation fails
 */
export const convertHealthComponent = (
  component: Partial<HealthComponent>
): Record<string, any> | undefined => {
  return convertAttributeComponent(component, 'health', 0);
};
