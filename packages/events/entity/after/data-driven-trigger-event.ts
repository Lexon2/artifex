import { DataDrivenEntityTriggerAfterEvent, world } from '@minecraft/server';

import { RequireAtLeastOne } from '@artifex/common/types';
import { BasicEventListener } from '@artifex/events/common/basic-event.listener';
import { BasicEventRouter } from '@artifex/events/common/basic-event.router';
import { EVENT_ROUTE_GLOBAL_ID } from '@artifex/events/common/constants';
import {
  EventEntityTypeIdsRouteOption,
  EventIdsRouteOption,
} from '@artifex/events/common/interfaces';
import { EventAction, EventActionData } from '@artifex/events/common/types';
import { ArtifexEventUtils } from '@artifex/events/common/utils';

/// Private Types ///

type Action = EventAction<DataDrivenEntityTriggerAfterEvent>;

/// Private API ///

let router: BasicEventRouter<Action, EventActionData<Action>> | undefined;
let listener: BasicEventListener<DataDrivenEntityTriggerAfterEvent> | undefined;

/// Public Types ///

export type DataDrivenEventTriggerAfterEventRouteOptions = RequireAtLeastOne<
  EventEntityTypeIdsRouteOption & EventIdsRouteOption
>;

// Public API ///

export const entityEventTrigger = (
  action: Action,
  routes?: DataDrivenEventTriggerAfterEventRouteOptions,
): void => {
  if (!router || !listener) {
    router = new BasicEventRouter<Action, EventActionData<Action>>();

    listener = new BasicEventListener({
      signal: world.afterEvents.dataDrivenEntityTrigger,
      callback(context) {
        // Global routes
        const global = router!.routes[EVENT_ROUTE_GLOBAL_ID];
        if (global !== undefined) {
          for (let i = 0; i < global.length; i++) {
            global[i].action(context);
          }
        }

        // Specific routes
        const combos = router!.getByEventParams(
          `e[${context.entity.typeId}]`,
          `event[${context.eventId}]`,
        );
        for (let i = 0; i < combos.length; i++) {
          combos[i].action(context);
        }
      },
    });
  }

  ArtifexEventUtils.initializeEvent(listener, router, action, routes);
};
