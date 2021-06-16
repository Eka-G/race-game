import PageStructure from '../page-structure';
import Table from '../table';
import { ChangeWinnersEvent, winnersState, url } from '../../shared';

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
      limitPage: winnersState.limit,
      updateFunc: () => {},
    });

    super.content = this.winPage;
    super.updateFunc = () => this.winPage.updateBody();

    window.addEventListener(ChangeWinnersEvent.eventName, () => {
      this.updateTitles();
      this.updateBtns();
    });
  }
}

export default WinnersContent;
