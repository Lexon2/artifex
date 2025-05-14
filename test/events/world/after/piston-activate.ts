import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.pistonActivate(({ piston }) => {
  console.warn(`Piston at ${piston.block.location} was activated.`);
});
