import BaseComponent from '../base-component';
import RaceParticipant from '../race-participant';
import { CarInterface, CreateEvent, DeleteEvent, UpdateEvent, url } from '../../shared';

class GaragePage extends BaseComponent {
  private limit = 7;

  private startPage = 1;

  private currentPage = 1;

  constructor() {
    super();

    this.showCars(this.startPage, this.limit);

    window.addEventListener(CreateEvent.eventName, (event: CustomEventInit<CarInterface>) => {
      if (!event.detail) return;

      this.addCar(event.detail);
    });

    window.addEventListener(DeleteEvent.eventName, (event: CustomEventInit<number>) => {
      if (!event.detail) return;

      this.removeCar(event.detail);
    });

    window.addEventListener(UpdateEvent.eventName, () => {
      this.updateContent();
    });
  }

  private async showCars(pageNum: number, limit: number) {
    const cars = await fetch(`${url}?_page=${pageNum}&_limit=${limit}`).then((res) => res.json());

    cars.forEach((item: CarInterface) => {
      const car = new RaceParticipant(item);
      this.element.appendChild(car.element);
    });
  }

  private clearContent() {
    this.element.innerHTML = '';
  }

  private updateContent() {
    this.clearContent();
    this.showCars(this.currentPage, this.limit);
  }

  private async addCar(data: CarInterface) {
    const newCarInfo = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    const newCar = new RaceParticipant(newCarInfo);

    this.element.appendChild(newCar.element);

    this.updateContent();
  }

  private async removeCar(carId: number) {
    await fetch(`${url}/${carId}`, { method: 'DELETE' });

    this.updateContent();
  }
}

export default GaragePage;
