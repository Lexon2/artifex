import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemUse(
  ({ player, itemStack }) => {
    console.warn(`Player ${player.name} used ${itemStack?.typeId}`);
  },
  {
    itemTypeId: ['minecraft:apple'],
  },
);
