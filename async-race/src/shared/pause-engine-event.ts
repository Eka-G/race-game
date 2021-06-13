class PauseEngineDetail extends CustomEvent<number> {
  static eventName = 'pause-engine';

  constructor(carId: number) {
    super(PauseEngineDetail.eventName, { detail: carId });
  }
}

export default PauseEngineDetail;
