import type { CarInterface, StartEventDetail } from '../../types';
import BaseComponent from '../base-component';
import './car.scss';
import { StartCarEvent, StopCarEvent, PauseEngineEvent, winnerState, url } from '../../shared';

class Car extends BaseComponent {
  private name: string;

  private animation?: Animation;

  constructor(data: CarInterface) {
    super('div', ['car']);

    this.element.setAttribute('style', `background-color: ${data.color}`);
    this.name = data.name;

    window.addEventListener(StartCarEvent.eventName, (event: CustomEventInit<StartEventDetail>) => {
      const { id, animationSpeed } = event.detail ?? {};

      if (!(id === data.id && animationSpeed)) return;

      const carAnimationKeyFrame = new KeyframeEffect(this.element, [{ left: '0' }, { left: '100%' }], {
        duration: animationSpeed,
        fill: 'forwards',
      });

      const carAnimation = new Animation(carAnimationKeyFrame, document.timeline);
      carAnimation.id = 'move';
      this.animation = carAnimation;

      this.animation.onfinish = async () => {
        if (winnerState.winner || !data.id) return;

        winnerState.winner = {
          name: data.name,
          id: data.id,
          time: animationSpeed,
        };

        const winnerRes = await fetch(`${url.winners}?id=${data.id}`);
        const time = (animationSpeed / 1000).toFixed(0);

        if (!winnerRes.ok) {
          await fetch(`${url.winners}`, {
            method: 'POST',
            body: JSON.stringify({
              id: data.id,
              wins: 1,
              time,
            }),
          });
        } else {
          const winner = <{ id: number; wins: number; time: number }>await winnerRes.json();

          await fetch(`${url.winners}`, {
            method: 'PUT',
            body: JSON.stringify({
              wins: winner.wins + 1,
              time,
            }),
          });
        }

        alert(`${data.name} finished first ${time}s`);
      };

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
