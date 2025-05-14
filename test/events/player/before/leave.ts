import { PlayerBeforeEvents } from '@artifex/events/player';

PlayerBeforeEvents.leave(({ player }) => {
  console.warn(`Player ${player.name} is about to leave the game.`);
});
