class UpdateEvent extends CustomEvent<number> {
  static eventName = 'update-car';

  constructor() {
    super(UpdateEvent.eventName);
  }
}

export default UpdateEvent;
