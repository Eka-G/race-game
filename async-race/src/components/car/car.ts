import type { CarInterface, StartEventDetail } from '../../types';
import BaseComponent from '../base-component';
import './car.scss';
import { StartCarEvent, StopCarEvent, PauseEngineEvent } from '../../shared';

class Car extends BaseComponent {
  private name: string;

  private animation?: Animation;

  constructor(data: CarInterface) {
    super('div', ['car']);

    this.element.setAttribute('style', `background-color: ${data.color}`);
    this.name = data.name;

    window.addEventListener(StartCarEvent.eventName, (event: CustomEventInit<StartEventDetail>) => {
      if (event.detail?.id !== data.id) return;

      const carAnimationKeyFrame = new KeyframeEffect(this.element, [{ left: '0' }, { left: '100%' }], {
        duration: event.detail?.animationSpeed,
        fill: 'forwards',
      });

      const carAnimation = new Animation(carAnimationKeyFrame, document.timeline);
      carAnimation.id = 'move';
      this.animation = carAnimation;

      if (event.detail?.animationSpeed) carAnimation.play();
    });

    if (data.id) {
      Car.addWindowListener(StopCarEvent.eventName, data.id, () => this.stopCar());
      Car.addWindowListener(PauseEngineEvent.eventName, data.id, () => this.pauseEngine());
    }
  }

  private stopCar() {
    if (!this.animation) return;

    this.animation.cancel();
  }

  private pauseEngine() {
    if (!this.animation) return;

    this.animation.pause();
  }

  private static addWindowListener(eventName: string, id: number, func: () => void) {
    window.addEventListener(eventName, (event: CustomEventInit<number>) => {
      if (event.detail !== id) return;

      func();
    });
  }
}

export default Car;
