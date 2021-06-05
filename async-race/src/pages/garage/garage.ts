import Page from '../page';
import ControlPanel from '../../components/control-panel';
import Garage from '../../components/garage';
import appendElements from '../../shared/appendFunc';

class GaragePage extends Page {
  private controlPanel = new ControlPanel();

  private garage = new Garage();

  constructor() {
    super();

    appendElements(this.element, this.controlPanel.element, this.garage.element);
  }
}

export default new GaragePage();
