import type { ChangeWinOpsDetail } from '../types';

class ChangeWinOpsEvent extends CustomEvent<ChangeWinOpsDetail> {
  static eventName = 'change-win-ops';

  constructor() {
    super(ChangeWinOpsEvent.eventName);
  }
}

export default ChangeWinOpsEvent;
