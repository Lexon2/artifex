import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.interactWithEntity(
  ({ entity, player }) => {
    console.warn(
      `Player ${player.name} interacted with entity ${entity.typeId}`,
    );
  },
  {
    entityTypeId: ['minecraft:cow'],
  },
);
