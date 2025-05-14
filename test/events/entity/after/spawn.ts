import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.spawn(
  ({ entity }) => {
    console.warn(`Entity ${entity.typeId} has spawned.`);
  },
  {
    entityTypeId: ['minecraft:chicken', 'minecraft:cow'],
  },
);
