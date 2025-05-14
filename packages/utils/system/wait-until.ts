import { system } from '@minecraft/server';

export const waitUntil = async (
  fn: () => boolean,
  interval: number,
  maxTries: number = 40,
) => {
  for (let i = 0; i < maxTries; i++) {
    if (fn()) {
      return true;
    }

    await system.waitTicks(interval);
  }
};
