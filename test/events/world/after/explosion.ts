import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.explosion(() => {
  console.warn(`An explosion occurred.`);
});
