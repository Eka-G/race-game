import type { CreateEventDetail, CarInterface } from '../../types';
import BaseComponent from '../base-component';
import RaceParticipant from '../race-participant';
import { CreateEvent, DeleteEvent, UpdateEvent, ChangeGarageEvent, url, garageState } from '../../shared';

class GaragePage extends BaseComponent {
  constructor() {
    super();

    this.showCars(garageState.startPage, garageState.limit);

    window.addEventListener(CreateEvent.eventName, async (event: CustomEventInit<CreateEventDetail>) => {
      if (!event.detail) return;

      await GaragePage.addCar(event.detail.carInfo);

      if (event.detail.carDuplicate === 0 || event.detail.carDuplicate === garageState.maxAddingCar) {
        window.dispatchEvent(new UpdateEvent());
      }
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
    this.clearContent();

    const cars = await fetch(`${url.garage}?_page=${pageNum}&_limit=${limit}`).then((res) => res.json());

    cars.forEach((item: CarInterface) => {
      const car = new RaceParticipant(item);
      this.element.appendChild(car.element);
    });
  }

  private clearContent() {
    this.element.innerHTML = '';
  }

  public updateContent() {
    this.showCars(garageState.currentPage, garageState.limit);

    window.dispatchEvent(new ChangeGarageEvent());
  }

  private static async addCar(data: CarInterface) {
    await fetch(url.garage, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  private async removeCar(carId: number) {
    await fetch(`${url.garage}/${carId}`, { method: 'DELETE' });

    this.updateContent();
  }
}

export default GaragePage;
