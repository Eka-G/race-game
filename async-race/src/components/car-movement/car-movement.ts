import BaseComponent from '../base-component';
import MovementButton from '../btn-movement';
import { appendElements, url, StartCarEvent, StopCarEvent } from '../../shared';
import './car-movement.scss';

class CarMovement extends BaseComponent {
  private startButton = new MovementButton('A');

  private stopButton = new MovementButton('B');

  constructor(carId: number) {
    super('div', ['car-movement']);

    appendElements(this.element, this.startButton.element, this.stopButton.element);
    this.stopButton.element.disabled = true;

    this.startButton.element.addEventListener('click', async () => {
      this.startButton.element.disabled = true;
      this.stopButton.element.disabled = false;

      const response = await fetch(`${url.engine}?id=${carId}&status=started`);
      const result = await response.json();
      const speed: number = result.distance / result.velocity;

      window.dispatchEvent(
        new StartCarEvent({
          id: carId,
          animationSpeed: speed,
        }),
      );
    });

    this.stopButton.element.addEventListener('click', () => {
      this.startButton.element.disabled = false;
      this.stopButton.element.disabled = true;

      window.dispatchEvent(new StopCarEvent(carId));
    });
  }
}

export default CarMovement;
