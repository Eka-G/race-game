class ChangeGarageEvent extends CustomEvent<number> {
  static eventName = 'update-garage';

  constructor() {
    super(ChangeGarageEvent.eventName);
  }
}

export default ChangeGarageEvent;
