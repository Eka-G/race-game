import BaseComponent from '../base-component';
import RaceParticipant from '../race-participant';
import appendElements from '../../shared/appendFunc';

class GaragePage extends BaseComponent {
  private raceParticipant = new RaceParticipant();

  private secondRaceParticipant = new RaceParticipant();

  constructor() {
    super();

    appendElements(this.element, this.raceParticipant.element, this.secondRaceParticipant.element);
  }
}

export default GaragePage;
