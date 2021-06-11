class SelectEvent extends CustomEvent<number> {
  static eventName = 'select-car';

  constructor(carId: number) {
    super(SelectEvent.eventName, { detail: carId });
  }
}

export default SelectEvent;
