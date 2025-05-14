import {
  InputEventOptions,
  ScriptEventMessageFilterOptions,
} from '@minecraft/server';

import { MinecraftWorldEventFilters } from './minecraft-world-event-filters';

export type MinecraftEventFilters =
  | MinecraftWorldEventFilters
  | ScriptEventMessageFilterOptions
  | InputEventOptions;
