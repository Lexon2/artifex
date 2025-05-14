import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemStartUse(
  ({ player, itemStack }) => {
    console.warn(`Player ${player.name} started using ${itemStack?.typeId}`);
  },
  {
    itemTypeId: ['minecraft:potion'],
  },
);
