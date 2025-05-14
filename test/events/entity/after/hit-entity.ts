import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.hitEntity(
  ({ damagingEntity, hitEntity }) => {
    console.warn(
      `Entity ${damagingEntity.typeId} hit entity ${hitEntity.typeId}.`,
    );
  },
  {
    damagerTypeId: ['minecraft:player'],
    entityTypeId: ['minecraft:pig'],
  },
);
