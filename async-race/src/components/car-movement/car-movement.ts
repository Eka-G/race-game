import BaseComponent from '../base-component';
import MovementButton from '../btn-movement';
import { appendElements, url, StartCarEvent, StopCarEvent, PauseEngineEvent } from '../../shared';
import './car-movement.scss';

class CarMovement extends BaseComponent {
  private startButton = new MovementButton('A');

  private stopButton = new MovementButton('B');

  private carId: number;

  constructor(id: number) {
    super('div', ['car-movement']);

    this.carId = id;

    appendElements(this.element, this.startButton.element, this.stopButton.element);
    this.stopButton.element.disabled = true;

    this.addListeners();
  }

  private addListeners() {
    this.startButton.element.addEventListener('click', async () => {
      this.startButton.element.disabled = true;
      this.stopButton.element.disabled = false;

      const response = await fetch(`${url.engine}?id=${this.carId}&status=started`);

      if (!response) return;

      const result = await response.json();
      const speed: number = result.distance / result.velocity;

      window.dispatchEvent(
        new StartCarEvent({
          id: this.carId,
          animationSpeed: speed,
        }),
      );

      const driveResponse = await fetch(`${url.engine}?id=${this.carId}&status=drive`);

      if (driveResponse.status === 500) window.dispatchEvent(new PauseEngineEvent(this.carId));
    });

    this.stopButton.element.addEventListener('click', async () => {
      this.startButton.element.disabled = false;
      this.stopButton.element.disabled = true;
      const response = await fetch(`${url.engine}?id=${this.carId}&status=stopped`);

      if (!response.ok) return;

      window.dispatchEvent(new StopCarEvent(this.carId));
    });
  }
}

export default CarMovement;
