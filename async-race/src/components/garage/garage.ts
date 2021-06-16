import PageStructure from '../page-structure';
import GaragePage from '../garage-page';
import { ChangeGarageEvent, garageState, url } from '../../shared';
import './garage.scss';

class Garage extends PageStructure {
  private garagePage = new GaragePage();

  constructor() {
    super({
      pageName: 'Garage',
      pageClass: 'garage',
      pageUrl: url.garage,
      currentPage: garageState.currentPage,
      limitPage: garageState.limit,
      updateFunc: () => {},
    });

    super.updateFunc = () => this.garagePage.updateContent();
    super.content = this.garagePage;

    window.addEventListener(ChangeGarageEvent.eventName, () => {
      this.updateTitles();
      this.updateBtns();
    });
  }
}

export default Garage;
