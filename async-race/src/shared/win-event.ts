import type { WinEventDetail } from '../types';

class WinEvent extends CustomEvent<WinEventDetail> {
  static eventName = 'start-car';

  constructor(data: WinEventDetail) {
    super(WinEvent.eventName, { detail: data });
  }
}

export default WinEvent;
