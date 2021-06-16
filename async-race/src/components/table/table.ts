import type { WinResponce } from '../../types';
import TableWinnerRow from '../table-winner-row';
import TableHead from '../table-head';
import BaseComponent from '../base-component';
import { ChangeWinnersEvent, winnersState, WinEvent, RerenderWinnersEvent, url } from '../../shared';
import './table.scss';

class Table extends BaseComponent<HTMLTableElement> {
  private head = new TableHead();

  private content = document.createElement('tbody');

  constructor() {
    super('table', ['table']);

    this.element.append(this.head.element, this.content);
    this.updateBody();

    window.addEventListener(WinEvent.eventName, () => this.updateBody());
    window.addEventListener(RerenderWinnersEvent.eventName, () => {
      this.updateBody();
    });
  }

  private static getIndex(value: number) {
    return winnersState.limit * winnersState.currentPage + value - winnersState.limit;
  }

  public async updateBody() {
    this.content.innerHTML = '';
    const winnersUrl = new URL(url.winners);

    const { searchParams } = winnersUrl;

    searchParams.append('_page', winnersState.currentPage.toString());
    searchParams.append('_limit', winnersState.limit.toString());

    if (winnersState.sort) searchParams.append('_sort', winnersState.sort);
    if (winnersState.order) searchParams.append('_order', winnersState.order);

    const winResponse = await fetch(winnersUrl.href);
    const winners: WinResponce[] = await winResponse.json();

    winners.forEach((winner, i) => {
      this.content.appendChild(new TableWinnerRow(winner, Table.getIndex(i + 1)).element);
    });

    window.dispatchEvent(new ChangeWinnersEvent());
  }
}

export default Table;
