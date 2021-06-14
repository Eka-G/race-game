import type { CreateEventDetail, CarInterface } from '../types';

class CreateDataEvent extends CustomEvent<CreateEventDetail> {
  static eventName = 'create-car';

  constructor(data: CarInterface, duplicate: number) {
    super(CreateDataEvent.eventName, {
      detail: {
        carInfo: data,
        carDuplicate: duplicate,
      },
    });
  }
}

export default CreateDataEvent;
