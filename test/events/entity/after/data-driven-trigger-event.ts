import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.entityEventTrigger(
  ({ entity, eventId }) => {
    console.warn(
      `Entity ${entity.typeId} triggered data-driven event ${eventId}.`,
    );
  },
  {
    entityTypeId: ['minecraft:creeper'],
    eventId: ['minecraft:creeper:explode'],
  },
);
