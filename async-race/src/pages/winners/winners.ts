import Page from '../page';
import WinnersContent from '../../components/winers';

class WinnersPage extends Page {
  private winTable = new WinnersContent();

  constructor() {
    super();

    this.element.appendChild(this.winTable.element);
  }
}

export default new WinnersPage();
