import { MovementGenericComponent } from '../../../interfaces/components/navigation-movement/movement-generic-component';
import { validateMaxTurn } from '../../common/validation';

/**
 * Converts a MovementGenericComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertMovementGenericComponent = (
  component: Partial<MovementGenericComponent>
): { 'minecraft:movement.generic': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = {};

  // Validate maxTurn
  if (component.maxTurn !== undefined) {
    if (!validateMaxTurn(component.maxTurn, 'maxTurn')) {
      return undefined;
    }
    result.max_turn = component.maxTurn;
  }

  return {
    'minecraft:movement.generic': result
  };
};
