import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.projectileHitBlock(({ block, projectile }) => {
  console.warn(`Projectile ${projectile.typeId} hit block ${block.typeId}.`);
});
