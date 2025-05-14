import { PlayerAfterEvents } from '@artifex/events/player';

PlayerAfterEvents.inputPermissionCategoryChange(
  ({ player, category, enabled }) => {
    console.warn(
      `Player ${player.name} had input permission category ${category} changed to ${enabled}`,
    );
  },
);
