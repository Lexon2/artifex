import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemStopUse(
  ({ player, itemStack, useDuration }) => {
    console.warn(
      `Player ${player.name} stopped using ${itemStack?.typeId} after ${useDuration} ticks.`,
    );
  },
  {
    itemTypeId: ['minecraft:trident'],
  },
);
