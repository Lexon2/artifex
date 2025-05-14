import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.tripWireTrip(({ block }) => {
  console.warn(`Trip wire ${block.typeId} was tripped.`);
});
