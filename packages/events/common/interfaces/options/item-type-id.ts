import { Identifier } from '@artifex/common/types';

export interface EventItemTypeIdRouteOption {
  itemTypeId: Identifier | 'empty';
}

export interface EventBeforeItemTypeIdRouteOption {
  beforeItemTypeId: Identifier | 'empty';
}

export interface EventItemTypeIdsRouteOption {
  itemTypeId: EventItemTypeIdRouteOption['itemTypeId'][];
}

export interface EventBeforeItemTypeIdsRouteOption {
  beforeItemTypeId: EventBeforeItemTypeIdRouteOption['beforeItemTypeId'][];
}
