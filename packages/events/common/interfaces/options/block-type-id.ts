import { Identifier } from '@artifex/common/types';

export interface EventBlockTypeIdRouteOption {
  blockTypeId: Identifier;
}

export interface EventBrokenBlockTypeIdRouteOption {
  brokenBlockTypeId: Identifier;
}

export interface EventBeforeBlockTypeIdRouteOption {
  beforeBlockTypeId: Identifier;
}

export interface EventBlockTypeIdsRouteOption {
  blockTypeId: EventBlockTypeIdRouteOption['blockTypeId'][];
}

export interface EventBrokenBlockTypeIdsRouteOption {
  brokenBlockTypeId: EventBrokenBlockTypeIdRouteOption['brokenBlockTypeId'][];
}

export interface EventBeforeBlockTypeIdsRouteOption {
  beforeBlockTypeId: EventBeforeBlockTypeIdRouteOption['beforeBlockTypeId'][];
}
