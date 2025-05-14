import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.remove(
  ({ typeId }) => {
    console.warn(`Entity ${typeId} has been removed.`);
  },
  {
    entityTypeId: ['minecraft:creeper'],
  },
);
