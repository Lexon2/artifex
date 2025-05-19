import { ItemHopperComponent } from '../../../interfaces/components/interaction/item-hopper-component';
import { convertStateObject } from '../../common/state-object';

/**
 * Converts an ItemHopperComponent to Minecraft format
 * @param component The component to convert
 * @returns The component in Minecraft format or undefined if validation fails
 */
export const convertItemHopperComponent = (
  component: Partial<ItemHopperComponent>
): { 'minecraft:item_hopper': any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result: any = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:item_hopper': result
  };
};
