import type { CarInterface, StartResponse } from '../../types';
import BaseComponent from '../base-component';
import Button from '../button';
import CreatePanel from '../create-panel-item';
import UpdaterPanel from '../update-panel-item';
import {
  appendElements,
  CreateEvent,
  StartCarEvent,
  StopCarEvent,
  PauseEngineEvent,
  getRandomCar,
  garageState,
  url,
} from '../../shared';
import './control-panel.scss';

class ControlPanel extends BaseComponent {
  private createItem = new CreatePanel();

  private updateItem = new UpdaterPanel();

  private raceBtn = new Button('race');

  private resetBtn = new Button('reset');

  private generateBtn = new Button('generate cars');

  constructor() {
    super('div', ['control-panel']);

    appendElements(
      this.element,
      this.createItem.element,
      this.updateItem.element,
      this.raceBtn.element,
      this.resetBtn.element,
      this.generateBtn.element,
    );

    this.raceBtn.element.classList.add('button--bg-main');
    this.resetBtn.element.classList.add('button--bg-main');

    this.addListeners();
  }

  private static async getCarsInfo() {
    const pageResponce = await fetch(`${url.garage}?_page=${garageState.currentPage}&_limit=${garageState.limit}`);
    const cars = await pageResponce.json();

    return cars;
  }

  private addListeners() {
    this.generateBtn.element.addEventListener('click', () => {
      for (let i = 1; i <= garageState.maxAddingCar; i += 1) {
        const data = getRandomCar();
        window.dispatchEvent(new CreateEvent(data, i));
      }
    });

    this.raceBtn.element.addEventListener('click', async () => {
      const cars = await ControlPanel.getCarsInfo();

      const requests = cars.map((car: CarInterface) =>
        fetch(`${url.engine}?id=${car.id}&status=started`).then((response) => response.json()),
      );

      Promise.all<StartResponse>(requests).then((responses) => {
        responses.forEach(async (response, i) => {
          const speed = response.distance / response.velocity;

          window.dispatchEvent(
            new StartCarEvent({
              id: cars[i].id,
              animationSpeed: speed,
            }),
          );

          const driveResponse = await fetch(`${url.engine}?id=${cars[i].id}&status=drive`);

          if (driveResponse.status === 500) window.dispatchEvent(new PauseEngineEvent(cars[i].id));
        });
      });
    });

    this.resetBtn.element.addEventListener('click', async () => {
      const cars = await ControlPanel.getCarsInfo();
      const requests = cars.map((car: CarInterface) => fetch(`${url.engine}?id=${car.id}&status=stopped`));

      Promise.all(requests).then(() =>
        cars.forEach((car: CarInterface) => {
          if (!car.id) return;

          window.dispatchEvent(new StopCarEvent(car.id));
        }),
      );
    });
  }
}

export default ControlPanel;
