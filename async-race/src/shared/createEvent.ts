import { CarInterface } from '.';

class CreateDataEvent extends CustomEvent<CarInterface> {
  static eventName = 'create-car';

  constructor(data: CarInterface) {
    super(CreateDataEvent.eventName, { detail: data });
  }
}

export default CreateDataEvent;
