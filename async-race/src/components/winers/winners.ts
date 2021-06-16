import PageStructure from '../page-structure';
import Table from '../table';
import { winnersState, url } from '../../shared';

class WinnersContent extends PageStructure {
  private winPage = new Table();

  constructor() {
    super({
      pageName: 'Winners',
      pageClass: 'winners',
      pageUrl: url.winners,
      getCurrentPage: () => winnersState.currentPage,
      setCurrentPage: (currentPage: number) => {
        winnersState.currentPage = currentPage;
      },
      limitPage: winnersState.currentPage,
      updateFunc: () => {},
    });

    // super.updateFunc = () => this.garagePage.updateContent();
    super.content = this.winPage;

    // window.addEventListener(ChangeGarageEvent.eventName, () => {
    //   this.updateTitles();
    //   this.updateBtns();
    // });
  }
}

export default WinnersContent;
