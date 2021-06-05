import BaseComponent from '../base-component';
import ControlPanel from '../control-panel';
import CarInfo from '../car-info';
import RacingLane from '../racing-lane';
import appendElements from '../../shared/appendFunc';
import './race-participant.scss';

class RaceParticipant extends BaseComponent {
  private controlPanel = new ControlPanel();

  private carInfo = new CarInfo('Lada');

  private racingLane = new RacingLane();

  constructor() {
    super('div', ['race-participant']);

    appendElements(this.element, this.carInfo.element, this.racingLane.element);
  }
}

export default RaceParticipant;
