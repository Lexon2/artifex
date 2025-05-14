import { BasicEventListener } from '@artifex/events/common/basic-event.listener';
import { BasicEventRouter } from '@artifex/events/common/basic-event.router';
import { EventAction, EventActionData } from '@artifex/events/common/types';
import {
  CartesianInput,
  CartesianProduct,
  cartesianMerge,
} from '@artifex/utils/object/cartesian-merge';

import { ArtifexEventUtils } from '.';
import { EVENT_ROUTE_GLOBAL_ID } from '../constants';
import { EventActionPointer, EventRouteController } from '../interfaces';

export const initializeEvent = /* @__PURE__ */ <
  EventContext,
  RouteOptions extends CartesianInput,
>(
  listener: BasicEventListener<any>,
  router: BasicEventRouter<
    EventAction<EventContext>,
    EventActionData<EventAction<EventContext>>
  >,
  action: EventAction<EventContext>,
  options?: RouteOptions,
): EventRouteController => {
  const pointers: EventActionPointer[] = [];
  const routes = (
    options ? cartesianMerge(options) : [EVENT_ROUTE_GLOBAL_ID]
  ) as CartesianProduct<RouteOptions>[];

  const open = async () => {
    for (let i = 0; i < routes.length; i++) {
      // @TODO: Maybe there's a better way to handle types here
      const routeId = ArtifexEventUtils.generateRouteId(
        routes[i] as CartesianInput,
      );
      pointers.push(router.add(routeId, action));
    }
    await listener.listen();
    console.warn('open');
  };

  const close = () => {
    for (let i = 0; i < pointers.length; i++) {
      router.remove(pointers[i]);
    }

    if (router.size === 0) {
      listener.mute();
    }
  };

  open();

  return { open, close };
};
