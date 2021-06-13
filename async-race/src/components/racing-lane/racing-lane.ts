import type { CarInterface } from '../../types';
import BaseComponent from '../base-component';
import CarMovement from '../car-movement';
import Track from '../track';
import { appendElements } from '../../shared';
import './racing-lane.scss';

class RacingLane extends BaseComponent {
  private carMovement;

  private track;

  constructor(car: CarInterface) {
    super('div', ['racing-lane']);

    this.track = new Track(car);

    if (car.id) {
      this.carMovement = new CarMovement(car.id);
      appendElements(this.element, this.carMovement.element, this.track.element);
    }
  }
}

export default RacingLane;
