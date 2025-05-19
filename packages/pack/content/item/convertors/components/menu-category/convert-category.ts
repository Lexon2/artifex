import {
  validateBoolean,
  validateString,
} from '../../../../server-entity/convertors/common/validation';
import { ItemMenuCategory } from '../../../interfaces/item-menu-category';
import { ItemMenuCategoryType } from '../../../types/item-menu-category-type';

// @TODO: Use this constant to create a menu categories type
const validCategories = new Set([
  'construction',
  'equipment',
  'items',
  'nature',
  'none',
]);

export const convertMenuCategory = (
  input: ItemMenuCategory,
): ItemMenuCategory | undefined => {
  if (input.category === undefined || !validateCategory(input.category)) {
    return undefined;
  }

  const result: any = {};

  result.category = input.category;

  if (input.isHiddenInCommands !== undefined) {
    if (!validateBoolean(input.isHiddenInCommands, 'isHiddenInCommands')) {
      return undefined;
    }

    result.is_hidden_in_commands = input.isHiddenInCommands;
  }

  if (input.group !== undefined) {
    if (!validateString(input.group, 'group')) {
      return undefined;
    }

    result.group = input.group;
  }

  return result;
};

export const validateCategory = (
  category: ItemMenuCategoryType,
): ItemMenuCategoryType | undefined => {
  return validCategories.has(category) ? category : undefined;
};
