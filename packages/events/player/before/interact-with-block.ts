import { PlayerInteractWithBlockBeforeEvent, world } from '@minecraft/server';

import { RequireAtLeastOne } from '@artifex/common/types';
import { BasicEventListener } from '@artifex/events/common/basic-event.listener';
import { BasicEventRouter } from '@artifex/events/common/basic-event.router';
import { EVENT_ROUTE_GLOBAL_ID } from '@artifex/events/common/constants';
import {
  EventBlockTypeIdsRouteOption,
  EventItemTypeIdsRouteOption,
  EventRouteController,
} from '@artifex/events/common/interfaces';
import { EventAction, EventActionData } from '@artifex/events/common/types';
import { ArtifexEventUtils } from '@artifex/events/common/utils';

/// Private Types ///

type Action = EventAction<PlayerInteractWithBlockBeforeEvent>;

/// Private API ///

let router: BasicEventRouter<Action, EventActionData<Action>> | undefined;
let listener:
  | BasicEventListener<PlayerInteractWithBlockBeforeEvent>
  | undefined;

// Public Types ///

export type PlayerInteractWithBlockBeforeEventRouteOptions = RequireAtLeastOne<
  EventBlockTypeIdsRouteOption & EventItemTypeIdsRouteOption
>;

/// Public API ///

export const interactWithBlock = (
  action: Action,
  routes?: PlayerInteractWithBlockBeforeEventRouteOptions,
): EventRouteController => {
  if (!router || !listener) {
    router = new BasicEventRouter<Action, EventActionData<Action>>();

    listener = new BasicEventListener({
      signal: world.beforeEvents.playerInteractWithBlock,
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
          `b[${context.block.typeId}]`,
          `i[${context.itemStack?.typeId ?? 'empty'}]`,
        );
        for (let i = 0; i < combos.length; i++) {
          combos[i].action(context);
        }
      },
    });
  }

  return ArtifexEventUtils.initializeEvent<
    PlayerInteractWithBlockBeforeEvent,
    PlayerInteractWithBlockBeforeEventRouteOptions
  >(listener, router, action, routes);
};
