import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.die(
  ({ deadEntity }) => {
    console.warn(`Entity ${deadEntity.typeId} has died.`);
  },
  {
    entityTypeId: ['minecraft:cow'],
  },
);
