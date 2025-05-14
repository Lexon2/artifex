import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.buttonInput(({ button, newButtonState, player }) => {
  console.warn(
    `Player ${player.name} pressed button ${button} with state ${newButtonState}`,
  );
});
