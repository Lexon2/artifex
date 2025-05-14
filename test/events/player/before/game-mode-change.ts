import { PlayerBeforeEvents } from '@artifex/events/player';

PlayerBeforeEvents.gameModeChange((ctx) => {
  const { player, fromGameMode, toGameMode } = ctx;
  console.warn(
    `Player ${player.name} is changing game mode from ${fromGameMode} to ${toGameMode}`,
  );
  if (toGameMode === 'creative') {
    ctx.cancel = true;
    console.warn(`Switching to creative mode is not allowed!`);
  }
});
