class ChangeWinnersEvent extends CustomEvent<number> {
  static eventName = 'update-winners';

  constructor() {
    super(ChangeWinnersEvent.eventName);
  }
}

export default ChangeWinnersEvent;
