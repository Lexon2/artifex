import { MinecraftEventFilters } from '../types/minecraft-event-filters';

export interface MinecraftEventSignal<E> {
  subscribe(
    callback: (context: E) => void,
    options?: MinecraftEventFilters,
  ): (context: E) => void;
  unsubscribe(callback: (context: E) => void): void;
}
