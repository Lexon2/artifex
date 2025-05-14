import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemStartUseOn(
  ({ player, block }) => {
    console.warn(
      `Player ${player.name} started using an item on block ${block.typeId}`,
    );
  },
  {
    itemTypeId: ['minecraft:iron_pickaxe'],
    blockTypeId: ['minecraft:furnace'],
  },
);
