import {
  DimensionTypes,
  Entity,
  EntityQueryOptions,
  world,
} from '@minecraft/server';

export const getAllEntities = (options?: EntityQueryOptions): Entity[] => {
  return DimensionTypes.getAll().flatMap(({ typeId }) =>
    world.getDimension(typeId).getEntities(options),
  );
};
