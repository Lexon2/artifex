import { ItemEnchantableSlots } from '../../types/item-enchantable-slots';

const validEnchantableSlots = [
  'axe',
  'bow',
  'armor_feet',
  'armor_torso',
  'armor_head',
  'armor_legs',
  'hoe',
  'pickaxe',
  'shovel',
  'elytra',
  'fishing_rod',
  'flintsteel',
  'sword',
  'shears',
  'cosmetic_head',
];

interface EnchantableOptions {
  slot: ItemEnchantableSlots;
  value?: number;
}

/**
 * Creates an enchantable component for Minecraft items
 * @param options The enchantable options
 * @returns The enchantable component in Minecraft format or undefined if validation fails
 */
export const createEnchantable = (
  options?: EnchantableOptions,
): { 'minecraft:enchantable': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (!options.slot || !validEnchantableSlots.includes(options.slot)) {
    // @TODO: Add error handling
    console.error('Enchantable slot is invalid');

    return undefined;
  }

  const result: any = {
    slot: options.slot,
  };

  if (options.value !== undefined) {
    if (typeof options.value !== 'number' || options.value < 0) {
      // @TODO: Add error handling
      console.error('Enchantable value must be greater than or equal to 0');

      return undefined;
    }
    result.value = options.value;
  }

  return {
    'minecraft:enchantable': result,
  };
};
