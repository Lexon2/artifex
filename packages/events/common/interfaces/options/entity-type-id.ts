import { Identifier } from '@artifex/common/types';

export interface EventEntityTypeIdRouteOption {
  entityTypeId: Identifier;
}

export interface EventEntityTypeIdsRouteOption {
  entityTypeId: EventEntityTypeIdRouteOption['entityTypeId'][];
}

export interface EventDamagerTypeIdRouteOption {
  damagerTypeId: Identifier;
}

export interface EventDamagerTypeIdsRouteOption {
  damagerTypeId: EventDamagerTypeIdRouteOption['damagerTypeId'][];
}

export interface EventProjectileTypeIdRouteOption {
  projectileTypeId: Identifier;
}

export interface EventProjectileTypeIdsRouteOption {
  projectileTypeId: EventProjectileTypeIdRouteOption['projectileTypeId'][];
}
