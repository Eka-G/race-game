import BaseComponent from '../base-component';
import CarMovement from '../car-movement';
import Track from '../track';
import appendElements from '../../shared/appendFunc';
import './racing-lane.scss';

class RacingLane extends BaseComponent {
  private carMovement = new CarMovement();

  private track = new Track();

  constructor() {
    super('div', ['racing-lane']);

    appendElements(this.element, this.carMovement.element, this.track.element);
  }
}

export default RacingLane;
