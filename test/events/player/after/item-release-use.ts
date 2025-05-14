import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemReleaseUse(
  ({ player, itemStack }) => {
    console.warn(`Player ${player.name} released ${itemStack?.typeId}`);
  },
  {
    itemTypeId: ['minecraft:bow'],
  },
);
