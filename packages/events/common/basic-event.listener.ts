import { MinecraftEventSignal } from './interfaces/minecraft-event-signal';
import { MinecraftEventFilters } from './types/minecraft-event-filters';

type BasicEventListenerOptions<EventContext> = {
  signal: MinecraftEventSignal<EventContext>;
  callback: (context: EventContext) => void;
  filter?: MinecraftEventFilters;
};

export class BasicEventListener<EventContext> {
  protected signal: MinecraftEventSignal<EventContext>;
  protected callback: (context: EventContext) => void;

  public event?: (context: EventContext) => void;
  public filter?: MinecraftEventFilters;

  constructor(options: BasicEventListenerOptions<EventContext>) {
    const { signal, callback, filter } = options;

    this.signal = signal;
    this.callback = callback;
    this.filter = filter;
  }

  /**
   * Subscribes to the event signal.
   * If a filter is provided, it will be used to filter the events.
   * If the event is already subscribed, it will not subscribe again.
   */
  public listen(): void {
    if (this.event !== undefined) {
      return;
    }
    const { signal, callback, filter } = this;

    this.event =
      filter !== undefined
        ? signal.subscribe(callback, filter)
        : signal.subscribe(callback);
  }

  /**
   * Unsubscribes from the event signal.
   * If the event is not subscribed, it will not unsubscribe.
   */
  public mute(): void {
    const { signal, event } = this;

    if (event === undefined) {
      return;
    }

    signal.unsubscribe(event);
    this.event = undefined;
  }

  /**
   * Reloads the event signal.
   * It will unsubscribe from the event and then subscribe again.
   */
  public reload(): void {
    this.mute();
    this.listen();
  }
}
