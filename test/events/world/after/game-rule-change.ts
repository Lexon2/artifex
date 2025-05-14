import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.gameRuleChange(({ rule, value }) => {
  console.warn(`Game rule ${rule} changed to ${value}.`);
});
