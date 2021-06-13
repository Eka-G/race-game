class StopEventDetail extends CustomEvent<number> {
  static eventName = 'stop-car';

  constructor(carId: number) {
    super(StopEventDetail.eventName, { detail: carId });
  }
}

export default StopEventDetail;
