import BaseComponent from '../base-component';
import RaceParticipant from '../race-participant';
import { CarInterface, CreateEvent } from '../../shared';

class GaragePage extends BaseComponent {
  constructor() {
    super();

    this.showCars();

    window.addEventListener(CreateEvent.eventName, (event: CustomEventInit<CarInterface>) => {
      if (!event.detail) return;

      this.addCar(event.detail);
    });
  }

  private async showCars() {
    const cars = await fetch('http://127.0.0.1:3000/garage').then((res) => res.json());

    cars.forEach((item: CarInterface) => {
      const car = new RaceParticipant(item);
      this.element.appendChild(car.element);
    });
  }

  private clearContent() {
    this.element.innerHTML = '';
  }

  private async addCar(data: CarInterface) {
    const newCarInfo = await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    const newCar = new RaceParticipant(newCarInfo);

    this.element.appendChild(newCar.element);
  }
}

export default GaragePage;
