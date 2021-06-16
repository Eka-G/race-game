class RerenderWinnersEvent extends CustomEvent<void> {
  static eventName = 'change-win-ops';

  constructor() {
    super(RerenderWinnersEvent.eventName);
  }
}

export default RerenderWinnersEvent;
