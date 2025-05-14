import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.blockExplode(({ explodedBlockPermutation }) => {
  console.warn(`Block ${explodedBlockPermutation.type.id} exploded.`);
});
