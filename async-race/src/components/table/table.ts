import type { WinResponce } from '../../types';
import TableWinnerRow from '../table-winner-row';
import TableHead from '../table-head';
import BaseComponent from '../base-component';
import { ChangeWinnersEvent, winnersState, WinEvent, url } from '../../shared';
import './table.scss';

class Table extends BaseComponent<HTMLTableElement> {
  private head = new TableHead();

  private content = document.createElement('tbody');

  constructor() {
    super('table', ['table']);

    this.element.append(this.head.element, this.content);
    this.updateBody();

    window.addEventListener(WinEvent.eventName, () => this.updateBody());
  }

  private static getIndex(value: number) {
    return winnersState.limit * winnersState.currentPage + value - winnersState.limit;
  }

  public async updateBody() {
    this.content.innerHTML = '';
    const winResponse = await fetch(`${url.winners}?_page=${winnersState.currentPage}&_limit=${winnersState.limit}`);
    const winners: WinResponce[] = await winResponse.json();

    winners.forEach((winner, i) => {
      this.content.appendChild(new TableWinnerRow(winner, Table.getIndex(i + 1)).element);
    });

    window.dispatchEvent(new ChangeWinnersEvent());
  }
}

export default Table;
