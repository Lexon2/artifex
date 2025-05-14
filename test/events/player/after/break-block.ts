import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.breakBlock(
  ({ block, player }) => {
    console.warn(`Player ${player.name} broke block ${block.typeId}`);
  },
  {
    brokenBlockTypeId: ['minecraft:stone'],
    itemTypeId: ['minecraft:stone_pickaxe'],
  },
);
