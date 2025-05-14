import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.gameModeChange(({ player, fromGameMode, toGameMode }) => {
  console.warn(
    `Player ${player.name} changed game mode from ${fromGameMode} to ${toGameMode}`,
  );
});
