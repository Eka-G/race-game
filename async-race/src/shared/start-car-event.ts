import type { StartEventDetail } from '../types';

class StartCarEvent extends CustomEvent<StartEventDetail> {
  static eventName = 'start-car';

  constructor(data: StartEventDetail) {
    super(StartCarEvent.eventName, { detail: data });
  }
}

export default StartCarEvent;
