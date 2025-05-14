import { EntityAfterEvents } from '@artifex/events/entity';

EntityAfterEvents.hurt(
  ({ hurtEntity, damage, damageSource }) => {
    console.warn(
      `Entity ${hurtEntity.typeId} took ${damage} damage due to ${damageSource}.`,
    );
  },
  {
    entityTypeId: ['minecraft:pig'],
  },
);
