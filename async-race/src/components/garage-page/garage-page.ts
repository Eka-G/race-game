import type { CreateEventDetail, CarInterface, WinEventDetail } from '../../types';
import BaseComponent from '../base-component';
import RaceParticipant from '../race-participant';
import {
  CreateEvent,
  DeleteEvent,
  UpdateEvent,
  ChangeGarageEvent,
  RerenderWinnersEvent,
  WinEvent,
  url,
  garageState,
} from '../../shared';
import Modal from '../modal';

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

    window.addEventListener(WinEvent.eventName, (event: CustomEventInit<WinEventDetail>) => {
      if (!event.detail) return;

      const modalWin = new Modal(event.detail.name, String(event.detail.time));
      this.element.appendChild(modalWin.element);
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

  public updateContent(): void {
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

    const isWinnerRes = await fetch(`${url.winners}/${carId}`);
    if (isWinnerRes.ok) {
      await fetch(`${url.winners}/${carId}`, { method: 'DELETE' });
      window.dispatchEvent(new RerenderWinnersEvent());
    }

    this.updateContent();
  }
}

export default GaragePage;
