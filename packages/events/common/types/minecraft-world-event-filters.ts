import {
  BlockEventOptions,
  EntityDataDrivenTriggerEventOptions,
  EntityEventOptions,
} from '@minecraft/server';

export type MinecraftWorldEventFilters =
  | BlockEventOptions
  | EntityDataDrivenTriggerEventOptions
  | EntityEventOptions;
