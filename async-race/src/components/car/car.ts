import type { CarInterface, StartEventDetail } from '../../types';
import BaseComponent from '../base-component';
import './car.scss';
import { StartCarEvent, StopCarEvent } from '../../shared';

class Car extends BaseComponent {
  private name: string;

  constructor(data: CarInterface) {
    super('div', ['car']);

    this.element.setAttribute('style', `background-color: ${data.color}`);
    this.name = data.name;

    window.addEventListener(StartCarEvent.eventName, (event: CustomEventInit<StartEventDetail>) => {
      if (event.detail?.id !== data.id) return;

      if (event.detail?.animationSpeed) this.startCar(event.detail.animationSpeed);
    });

    window.addEventListener(StopCarEvent.eventName, (event: CustomEventInit<number>) => {
      if (event.detail !== data.id) return;

      this.stopCar();
    });
  }

  private startCar(time: number) {
    this.element.animate([{ left: 0 }, { left: `100%` }], {
      duration: Math.ceil(time),
      id: 'move',
      fill: 'forwards',
    });
  }

  private stopCar() {
    const animation = this.element.getAnimations().find(({ id }) => id === 'move');
    if (!animation) return;

    animation.cancel();
  }
}

export default Car;
