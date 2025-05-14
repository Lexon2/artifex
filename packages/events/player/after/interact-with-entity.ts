import {
  Entity,
  PlayerInteractWithEntityAfterEvent,
  world,
} from '@minecraft/server';

import { RequireAtLeastOne } from '@artifex/common/types';
import { BasicEventListener } from '@artifex/events/common/basic-event.listener';
import { BasicEventRouter } from '@artifex/events/common/basic-event.router';
import { EVENT_ROUTE_GLOBAL_ID } from '@artifex/events/common/constants';
import {
  EventBeforeItemTypeIdsRouteOption,
  EventEntityTypeIdsRouteOption,
  EventItemTypeIdsRouteOption,
  EventRouteController,
} from '@artifex/events/common/interfaces';
import { EventAction, EventActionData } from '@artifex/events/common/types';
import { ArtifexEventUtils } from '@artifex/events/common/utils';

/// Private Types ///

interface Context extends Omit<PlayerInteractWithEntityAfterEvent, 'target'> {
  entity: Entity;
}

type Action = EventAction<Context>;

/// Private API ///

let router: BasicEventRouter<Action, EventActionData<Action>> | undefined;
let listener:
  | BasicEventListener<PlayerInteractWithEntityAfterEvent>
  | undefined;

// Public Types ///

export type PlayerInteractWithEntityAfterEventRouteOptions = RequireAtLeastOne<
  EventEntityTypeIdsRouteOption &
    EventItemTypeIdsRouteOption &
    EventBeforeItemTypeIdsRouteOption
>;

/// Public API ///

export const interactWithEntity = (
  action: Action,
  routes?: PlayerInteractWithEntityAfterEventRouteOptions,
): EventRouteController => {
  if (!router || !listener) {
    router = new BasicEventRouter<Action, EventActionData<Action>>();

    listener = new BasicEventListener({
      signal: world.afterEvents.playerInteractWithEntity,
      callback(event) {
        const { target, player, beforeItemStack, itemStack } = event;
        const context: Context = {
          entity: target,
          player,
          itemStack,
          beforeItemStack,
        };

        const global = router!.routes[EVENT_ROUTE_GLOBAL_ID];
        if (global !== undefined) {
          for (let i = 0; i < global.length; i++) {
            global[i].action(context);
          }
        }

        const combos = router!.getByEventParams(
          `e[${target.typeId}]`,
          `i[${itemStack?.typeId ?? 'empty'}]`,
          `bi[${beforeItemStack?.typeId ?? 'empty'}]`,
        );
        for (let i = 0; i < combos.length; i++) {
          combos[i].action(context);
        }
      },
    });
  }

  return ArtifexEventUtils.initializeEvent<
    Context,
    PlayerInteractWithEntityAfterEventRouteOptions
  >(listener, router, action, routes);
};
