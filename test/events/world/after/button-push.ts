import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.buttonPush(
  ({ block }) => {
    console.warn(`Button ${block.typeId} was pushed.`);
  },
  {
    blockTypeId: ['minecraft:stone_button'],
  },
);
