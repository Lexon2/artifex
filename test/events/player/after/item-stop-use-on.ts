import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.itemStopUseOn(
  ({ player, block }) => {
    console.warn(
      `Player ${player.name} stopped using an item on block ${block.typeId}`,
    );
  },
  {
    itemTypeId: ['minecraft:golden_apple'],
    blockTypeId: ['minecraft:crafting_table'],
  },
);
