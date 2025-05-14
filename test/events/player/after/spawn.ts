import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.spawn(({ player, initialSpawn }) => {
  console.warn(
    `Player ${player.name} has spawned. Initial spawn: ${initialSpawn}`,
  );
});
