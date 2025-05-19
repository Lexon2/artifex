import { LuckComponent } from '../../../interfaces/components/attribute/luck-component';
import { convertAttributeComponent } from '../../common/attribute';

/**
 * Converts a LuckComponent to Minecraft format
 * @param component The component to convert
 * @returns The converted component in Minecraft format or undefined if validation fails
 */
export const convertLuckComponent = (
  component: Partial<LuckComponent>
): Record<string, any> | undefined => {
  return convertAttributeComponent(component, 'luck');
};
