import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.hitBlock(
  ({ entity, block }) => {
    console.warn(`Entity ${entity.typeId} hit block ${block.typeId}.`);
  },
  // {
  //   entityTypeId: ['minecraft:arrow', 'minecraft:fireball'],
  // },
);
