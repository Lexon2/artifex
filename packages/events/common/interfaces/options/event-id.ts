import { Identifier } from '@artifex/common/types';

export interface EventIdRouteOption {
  eventId: Identifier;
}

export interface EventIdsRouteOption {
  eventId: EventIdRouteOption['eventId'][];
}
