import {
  Block,
  Entity,
  Player,
  ScriptEventCommandMessageAfterEvent,
  ScriptEventSource,
} from '@minecraft/server';

import { Identifier } from '@artifex/common/types';

import { EventBlockTypeIdRouteOption } from './block-type-id';
import { EventEntityTypeIdRouteOption } from './entity-type-id';
import { EventAction } from '../../types';

export type ScriptEventCommandRouteOption = ScriptEventCommandIdRouteOption &
  ScriptEventCommandMessageRouteOption &
  (
    | ScriptEventCommandServerRouteOption
    | ScriptEventCommandPlayerRouteOption
    | ScriptEventCommandBlockRouteOption
    | ScriptEventCommandEntityRouteOption
    | ScriptEventCommandNPCRouteOption
  );

export type ScriptEventCommandActionFromRouteOption<
  Options extends ScriptEventCommandRouteOption,
> = Options extends ScriptEventCommandBlockRouteOption
  ? EventAction<{ block: Block; message: string }>
  : Options extends ScriptEventCommandPlayerRouteOption
    ? EventAction<{ player: Player; message: string }>
    : Options extends ScriptEventCommandEntityRouteOption
      ? EventAction<{
          entity: Entity;
          message: string;
        }>
      : Options extends ScriptEventCommandNPCRouteOption
        ? EventAction<{
            entity: Entity;
            message: string;
          }>
        : EventAction<ScriptEventCommandMessageAfterEvent>;

export interface ScriptEventCommandIdRouteOption {
  id: Identifier;
}

export interface ScriptEventCommandMessageRouteOption {
  message?: string;
}
/// Source Options ///

export interface ScriptEventCommandServerRouteOption {
  source: ScriptEventSource.Server;
}

export interface ScriptEventCommandPlayerRouteOption {
  source: 'player';
}

export interface ScriptEventCommandBlockRouteOption
  extends EventBlockTypeIdRouteOption {
  source: ScriptEventSource.Block;
}

export interface ScriptEventCommandEntityRouteOption
  extends EventEntityTypeIdRouteOption {
  source: ScriptEventSource.Entity;
}

export interface ScriptEventCommandNPCRouteOption
  extends EventEntityTypeIdRouteOption {
  source: ScriptEventSource.NPCDialogue;
}
