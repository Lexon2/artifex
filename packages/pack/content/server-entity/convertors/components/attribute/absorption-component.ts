import { AbsorptionComponent } from '../../../interfaces/components/attribute/absorption-component';
import { convertAttributeComponent } from '../../common/attribute';

/**
 * Converts an AbsorptionComponent to Minecraft format
 * @param component The component to convert
 * @returns The converted component in Minecraft format or undefined if validation fails
 */
export const convertAbsorptionComponent = (
  component: Partial<AbsorptionComponent>
): Record<string, any> | undefined => {
  return convertAttributeComponent(component, 'absorption');
};
