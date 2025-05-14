import { EventAction } from './event-action';

export type EventActionData<EA extends EventAction<any>> = {
  action: EA;
  id: number;
};
