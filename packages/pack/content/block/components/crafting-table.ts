export interface CraftingTableComponent {
  craftingTags?: string[];
  tableName?: string;
}

/**
 * Creates a crafting_table component for Minecraft blocks
 * @param options The crafting table options
 * @returns The crafting_table component in Minecraft format or undefined if validation fails
 */
export const createCraftingTable = (
  options?: CraftingTableComponent,
): { 'minecraft:crafting_table': any } | undefined => {
  if (!options) {
    return undefined;
  }

  const result: any = {};

  // Validate and add crafting_tags
  if (Array.isArray(options.craftingTags)) {
    for (const tag of options.craftingTags) {
      if (typeof tag !== 'string' || tag.length < 1 || tag.length > 64) {
        // @TODO: Add error handling
        console.error('Crafting tags must be a string array with 1-64 characters');

        return undefined;
      }
    }
    result.crafting_tags = options.craftingTags;
  }

  // Validate and add table_name
  if (options.tableName !== undefined) {
    if (
      typeof options.tableName !== 'string' ||
      options.tableName.length === 0
    ) {
      // @TODO: Add error handling
      console.error('Table name must be a non-empty string');

      return undefined;
    }
    result.table_name = options.tableName;
  }

  return {
    'minecraft:crafting_table': result,
  };
};
