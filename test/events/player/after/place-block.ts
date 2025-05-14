import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.placeBlock(
  ({ block, player }) => {
    console.warn(`Player ${player.name} placed block ${block.typeId}`);
  },
  {
    blockTypeId: ['minecraft:stone'],
  },
);
