import BaseComponent from '../base-component';
import CarMovement from '../car-movement';
import Track from '../track';
import { appendElements, CarInterface } from '../../shared';
import './racing-lane.scss';

class RacingLane extends BaseComponent {
  private carMovement = new CarMovement();

  private track;

  constructor(car: CarInterface) {
    super('div', ['racing-lane']);

    this.track = new Track(car);

    appendElements(this.element, this.carMovement.element, this.track.element);
  }
}

export default RacingLane;
