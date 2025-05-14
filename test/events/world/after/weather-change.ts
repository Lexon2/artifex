import { WorldAfterEvents } from '@artifex/events/world';

WorldAfterEvents.weatherChange(({ dimension, newWeather }) => {
  console.warn(`Weather changed to ${newWeather} in dimension ${dimension}.`);
});
