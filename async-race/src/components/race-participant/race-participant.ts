import BaseComponent from '../base-component';
import ControlPanel from '../control-panel';
import CarInfo from '../car-info';
import RacingLane from '../racing-lane';
import { appendElements, CarInterface } from '../../shared';
import './race-participant.scss';

class RaceParticipant extends BaseComponent {
  private controlPanel = new ControlPanel();

  private carInfo;

  private racingLane;

  constructor(car: CarInterface) {
    super('div', ['race-participant']);

    this.racingLane = new RacingLane(car);
    this.carInfo = new CarInfo(car.name);

    appendElements(this.element, this.carInfo.element, this.racingLane.element);
  }
}

export default RaceParticipant;
