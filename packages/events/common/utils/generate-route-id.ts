import { CartesianInput } from '../../../utils/object/cartesian-merge';
import { EVENT_ROUTE_GLOBAL_ID } from '../constants';

export const generateRouteId = (options: CartesianInput): string => {
  const keys = Object.keys(options);
  if (keys.length === 0) {
    return EVENT_ROUTE_GLOBAL_ID;
  }

  const EVENT_ROUTE_PREFIXES: Record<string, string> = {
    blockTypeId: 'b',
    brokenBlockTypeId: 'bb',
    itemTypeId: 'i',
    beforeItemTypeId: 'bi',
    entityTypeId: 'e',
    damagerTypeId: 'de',
    eventId: 'event',
    effectTypeId: 'eff',
    fromDimensionId: 'fromD',
    toDimensionId: 'toD',
    projectileTypeId: 'p',
  };
  const parts: string[] = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const prefix = EVENT_ROUTE_PREFIXES[key];
    const value = options[key];
    if (prefix !== undefined && value !== undefined) {
      parts.push(`${prefix}[${value}]`);
    }
  }

  return parts.length > 0 ? parts.sort().join('-') : EVENT_ROUTE_GLOBAL_ID;
};
