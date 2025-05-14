import { WeatherType } from '@minecraft/server';

import { WorldBeforeEvents } from '@artifex/events/world';

WorldBeforeEvents.weatherChange((context) => {
  console.warn(`Weather is about to change to ${context.newWeather}.`);

  // Cancel the weather change if it is to rain
  if (context.newWeather === WeatherType.Rain) {
    context.cancel = true;
    console.warn(`Weather change to rain has been canceled.`);
  }
});
