import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.leave(({ playerName }) => {
  console.warn(`Player ${playerName} has left the game.`);
});
