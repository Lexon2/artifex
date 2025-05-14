import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.pressurePlatePush(({ block }) => {
  console.warn(`Pressure plate ${block.typeId} was pushed.`);
});
