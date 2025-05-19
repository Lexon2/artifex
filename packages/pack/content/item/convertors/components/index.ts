import { createAllowOffHand } from './allow-off-hand';
import { createBlockPlacer } from './block-placer';
import { createBundleInteraction } from './bundle-interaction';
import { createCanDestroyInCreative } from './can-destroy-in-creative';
import { createCompostable } from './compostable';
import { createCooldown } from './cooldown';
import { createCustomComponents } from './custom-components';
import { createDamage } from './damage';
import { createDamageAbsorption } from './damage-absorption';
import { createDigger } from './digger';
import { createDisplayName } from './display-name';
import { createDurability } from './durability';
import { createDurabilitySensor } from './durability-sensor';
import { createDyeable } from './dyeable';
import { createEnchantable } from './enchantable';
import { createEntityPlacer } from './entity-placer';
import { createFood } from './food';
import { createFuel } from './fuel';
import { createGlint } from './glint';
import { createHandEquipped } from './hand-equipped';
import { createHoverTextColor } from './hover-text-color';
import { createIcon } from './icon';
import { createLiquidClipped } from './liquid-clipped';
import { createMaxStackSize } from './max-stack-size';
import { createProjectile } from './projectile';
import { createRarity } from './rarity';
import { createRecord } from './record';
import { createRepairable } from './repairable';
import { createShooter } from './shooter';
import { createShouldDespawn } from './should-despawn';
import { createStackedByData } from './stacked-by-data';
import { createStorageItem } from './storage-item';
import { createStorageWeightLimit } from './storage-weight-limit';
import { createStorageWeightModifier } from './storage-weight-modifier';
import { createTags } from './tags';
import { createThrowable } from './throwable';
import { createUseAnimation } from './use-animation';
import { createUseModifiers } from './use-modifiers';
import { createWearable } from './wearable';

/**
 * Mapping of ItemConfig component properties to their creator functions
 */
export const itemComponentCreatorsFactory: Record<string, (v?: any) => any> = {
  allowOffHand: createAllowOffHand,
  blockPlacer: createBlockPlacer,
  bundleInteraction: createBundleInteraction,
  canDestroyInCreative: createCanDestroyInCreative,
  compostable: createCompostable,
  cooldown: createCooldown,
  customComponents: createCustomComponents,
  damage: createDamage,
  damageAbsorption: createDamageAbsorption,
  digger: createDigger,
  displayName: createDisplayName,
  durabilitySensor: createDurabilitySensor,
  durability: createDurability,
  dyeable: createDyeable,
  enchantable: createEnchantable,
  entityPlacer: createEntityPlacer,
  food: createFood,
  fuel: createFuel,
  glint: createGlint,
  handEquipped: createHandEquipped,
  hoverTextColor: createHoverTextColor,
  icon: createIcon,
  liquidClipped: createLiquidClipped,
  maxStackSize: createMaxStackSize,
  projectile: createProjectile,
  record: createRecord,
  rarity: createRarity,
  repairable: createRepairable,
  shooter: createShooter,
  shouldDespawn: createShouldDespawn,
  stackedByData: createStackedByData,
  storageItem: createStorageItem,
  storageWeightLimit: createStorageWeightLimit,
  storageWeightModifier: createStorageWeightModifier,
  tags: createTags,
  throwable: createThrowable,
  useAnimation: createUseAnimation,
  useModifiers: createUseModifiers,
  wearable: createWearable,
};

// Re-export all component creators
export * from './allow-off-hand';

export * from './block-placer';

export * from './bundle-interaction';

export * from './can-destroy-in-creative';

export * from './compostable';

export * from './cooldown';

export * from './custom-components';

export * from './damage';

export * from './damage-absorption';

export * from './digger';

export * from './display-name';

export * from './durability-sensor';

export * from './durability';

export * from './dyeable';

export * from './enchantable';

export * from './entity-placer';

export * from './food';

export * from './fuel';

export * from './glint';

export * from './hand-equipped';

export * from './hover-text-color';

export * from './icon';

export * from './liquid-clipped';

export * from './max-stack-size';

export * from './projectile';

export * from './record';

export * from './rarity';

export * from './repairable';

export * from './shooter';

export * from './should-despawn';

export * from './stacked-by-data';

export * from './storage-item';

export * from './storage-weight-limit';

export * from './storage-weight-modifier';

export * from './tags';

export * from './throwable';

export * from './use-animation';

export * from './use-modifiers';

export * from './wearable';
