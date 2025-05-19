import { ItemUseAnimation } from '../../types/item-use-animation';

/**
 * Creates a use_animation component for Minecraft items
 * @param value The animation to play when using the item
 * @returns The use_animation component in Minecraft format or undefined if validation fails
 */
export const createUseAnimation = (
  value?: ItemUseAnimation,
): { 'minecraft:use_animation': ItemUseAnimation } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  const validAnimations: Set<ItemUseAnimation> = new Set([
    'bow',
    'brush',
    'camera',
    'crossbow',
    'drink',
    'eat',
    'none',
    'spear',
    'spyglass',
  ]);

  if (!validAnimations.has(value)) {
    // @TODO: Add error handling
    console.error('Use animation must be a valid animation type');
    console.error(
      `Valid animations are: ${Array.from(validAnimations).join(', ')}`,
    );

    return undefined;
  }

  return {
    'minecraft:use_animation': value,
  };
};
