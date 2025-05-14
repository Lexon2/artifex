import { SystemAfterEvents } from '@artifex/events/system';

const contoller = SystemAfterEvents.scriptEvent(
  ({ message, player }) => {
    console.warn(
      `Player ${player.name} triggered script event with message: ${message}`,
    );

    if (message === 'close') {
      contoller.close();
    }
  },
  {
    id: 'artifex:event',
    source: 'player',
  },
);
