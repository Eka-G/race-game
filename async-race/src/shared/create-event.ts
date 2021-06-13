import type { CreateEventDetail, CarInterface } from '../types';

class CreateDataEvent extends CustomEvent<CreateEventDetail> {
  static eventName = 'create-car';

  constructor(data: CarInterface, amount: number) {
    super(CreateDataEvent.eventName, {
      detail: {
        carInfo: data,
        carAmount: amount,
      },
    });
  }
}

export default CreateDataEvent;
