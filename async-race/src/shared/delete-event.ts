class DeleteEvent extends CustomEvent<number> {
  static eventName = 'delete-car';

  constructor(carId: number) {
    super(DeleteEvent.eventName, { detail: carId });
  }
}

export default DeleteEvent;
