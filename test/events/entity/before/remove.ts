import { EntityBeforeEvents } from '@artifex/events/entity';

EntityBeforeEvents.remove(
  (context) => {
    const { removedEntity } = context;

    console.warn(`Entity ${removedEntity.typeId} is about to be removed.`);
  },
  {
    entityTypeId: ['minecraft:zombie', 'minecraft:skeleton'],
  },
);
