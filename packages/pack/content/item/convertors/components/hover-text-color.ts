import { ItemHoverTextColor } from "../../types/item-hover-text-color";


/**
 * Creates a hover_text_color component for Minecraft items
 * @param value The color of the item name when hovered
 * @returns The hover_text_color component in Minecraft format or undefined if validation fails
 */
export const createHoverTextColor = (
  value?: ItemHoverTextColor,
): { 'minecraft:hover_text_color': ItemHoverTextColor } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  const validColors: ItemHoverTextColor[] = [
    "black", "blue", "brown", "cyan", "gray", "green",
    "light_blue", "light_green", "magenta", "orange",
    "pink", "purple", "red", "silver", "white", "yellow"
  ];

  if (!validColors.includes(value)) {
    // @TODO: Add error handling
    console.error('Hover text color must be a valid Minecraft color');

    return undefined;
  }

  return {
    'minecraft:hover_text_color': value,
  };
};
