import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.targetBlockHit(({ block }) => {
  console.warn(`Target block ${block.typeId} was hit.`);
});
