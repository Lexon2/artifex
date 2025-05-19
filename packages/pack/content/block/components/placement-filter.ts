import { PlacementFilterComponent } from '../interfaces/block-config';

/**
 * Creates a placement_filter component for Minecraft blocks
 * @param options The placement filter options
 * @returns The placement_filter component in Minecraft format or undefined if validation fails
 */
export const createPlacementFilter = (
  options?: PlacementFilterComponent,
): { 'minecraft:placement_filter': any } | undefined => {
  if (options === undefined) {
    return undefined;
  }

  const result: any = {};

  if (Array.isArray(options.conditions)) {
    const conditions: any[] = [];

    for (const condition of options.conditions) {
      const newCondition: any = {};

      if (Array.isArray(condition.allowedFaces)) {
        const validFaces = [
          'up',
          'down',
          'north',
          'south',
          'east',
          'west',
          'side',
          'all',
        ];

        for (const face of condition.allowedFaces) {
          if (!validFaces.includes(face)) {
            // @TODO: Add error handling
            console.error('Allowed faces must be valid direction values');

            return undefined;
          }
        }

        newCondition.allowed_faces = condition.allowedFaces;
      }

      if (Array.isArray(condition.blockFilter)) {
        const blockFilters: any[] = [];

        for (const filter of condition.blockFilter) {
          if (typeof filter === 'string') {
            if (filter.length === 0) {
              // @TODO: Add error handling
              console.error('Block filter strings must not be empty');

              return undefined;
            }
            blockFilters.push(filter);
          } else if (
            typeof filter === 'object' &&
            filter !== null &&
            typeof filter.tags === 'string'
          ) {
            blockFilters.push({ tags: filter.tags });
          } else {
            // @TODO: Add error handling
            console.error(
              'Block filter must be a string or an object with tags property',
            );

            return undefined;
          }
        }

        newCondition.block_filter = blockFilters;
      }

      conditions.push(newCondition);
    }

    result.conditions = conditions;
  }

  return {
    'minecraft:placement_filter': result,
  };
};
