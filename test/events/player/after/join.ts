import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.join(({ playerName }) => {
  console.warn(`Player ${playerName} has joined the game.`);
});
