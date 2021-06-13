import type { CarInterface } from '../../types';
import BaseComponent from '../base-component';
import CarInfo from '../car-info';
import RacingLane from '../racing-lane';
import { appendElements } from '../../shared';
import './race-participant.scss';

class RaceParticipant extends BaseComponent {
  private carInfo;

  private racingLane;

  private numder;

  constructor(car: CarInterface) {
    super('div', ['race-participant']);

    this.numder = car.id;
    this.racingLane = new RacingLane(car);

    if (car.id) {
      this.carInfo = new CarInfo(car.name, car.id);
      appendElements(this.element, this.carInfo.element, this.racingLane.element);
    }
  }
}

export default RaceParticipant;
