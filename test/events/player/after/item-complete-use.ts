import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemCompleteUse(
  ({ player, itemStack, useDuration }) => {
    console.warn(
      `Player ${player.name} completed using ${itemStack?.typeId} after ${useDuration} ticks.`,
    );
  },
  {
    itemTypeId: ['minecraft:apple'],
  },
);
