interface RepairItem {
  items: string[];
  repairAmount: string | number;
}

interface RepairableOptions {
  repairItems?: RepairItem[];
}

/**
 * Creates a repairable component for Minecraft items
 * @param options The repairable options
 * @returns The repairable component in Minecraft format or undefined if validation fails
 */
export const createRepairable = (
  options?: RepairableOptions,
): { 'minecraft:repairable': any } | undefined => {
  if (!options) {
    // Empty component is valid for repairable
    return undefined;
  }

  const result: any = {};

  if (Array.isArray(options.repairItems) && options.repairItems.length > 0) {
    result.repair_items = options.repairItems.map((item) => {
      if (!Array.isArray(item.items) || item.items.length === 0) {
        console.warn('Repair items must have a non-empty items array');
      }

      if (
        (typeof item.repairAmount !== 'string' &&
          typeof item.repairAmount !== 'number') ||
        (typeof item.repairAmount === 'string' &&
          item.repairAmount.length === 0) ||
        (typeof item.repairAmount === 'number' && item.repairAmount <= 0)
      ) {
        console.warn(
          'Repair amount must be a positive number or non-empty string',
        );
      }

      return {
        items: item.items,
        repair_amount: item.repairAmount,
      };
    });
  }

  return {
    'minecraft:repairable': result,
  };
};
