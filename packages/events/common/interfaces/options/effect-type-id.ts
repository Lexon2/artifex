import { MinecraftEffectTypes } from '@minecraft/vanilla-data';

export interface EventEffectTypeIdRouteOption {
  effectTypeId: MinecraftEffectTypes;
}

export interface EventEffectTypeIdsRouteOption {
  effectTypeId: EventEffectTypeIdRouteOption['effectTypeId'][];
}
