import { ItemRarity } from '../../types/item-rarity';

/**
 * Creates a rarity component for Minecraft items
 * @param value The rarity value of the item
 * @returns The rarity component in Minecraft format or undefined if validation fails
 */
export const createRarity = (
  value?: ItemRarity,
): { 'minecraft:rarity': ItemRarity } | undefined => {
  if (value === undefined) {
    return undefined;
  }

  const validRarities: ItemRarity[] = ['common', 'uncommon', 'rare', 'epic'];

  if (!validRarities.includes(value)) {
    // @TODO: Add error handling
    console.error('Rarity must be one of: common, uncommon, rare, epic');

    return undefined;
  }

  return {
    'minecraft:rarity': value,
  };
};
