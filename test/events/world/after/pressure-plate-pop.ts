import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.pressurePlatePop(({ block }) => {
  console.warn(`Pressure plate ${block.typeId} popped.`);
});
