import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.emote(({ player, personaPieceId }) => {
  console.warn(
    `Player ${player.name} performed emote with ID ${personaPieceId}`,
  );
});
