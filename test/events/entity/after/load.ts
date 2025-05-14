import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.load(
  ({ entity }) => {
    console.warn(`Entity ${entity.typeId} has been loaded.`);
  },
  {
    entityTypeId: ['minecraft:cow'],
  },
);
