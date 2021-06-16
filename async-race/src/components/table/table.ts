import type { CarInterface, WinResponce } from '../../types';
import TableCell from '../table-cell';
import TableRow from '../table-row';
import TableHead from '../table-head';
import BaseComponent from '../base-component';
import { url } from '../../shared';
import './table.scss';

class Table extends BaseComponent<HTMLTableElement> {
  private head = new TableHead();

  private content = document.createElement('tbody');

  constructor() {
    super('table', ['table']);

    this.element.append(this.head.element, this.content);
    this.updateBody();
  }

  private async updateBody() {
    this.content.innerHTML = '';
    const winResponse = await fetch(url.winners);
    const winners: WinResponce[] = await winResponse.json();

    winners.forEach(async (winInfo, i) => {
      const carInfoResponce = await fetch(`${url.garage}/${winInfo.id}`);
      const carInfo: CarInterface = await carInfoResponce.json();
      const cells = [];
      const carCell = new TableCell(``);
      carCell.element.classList.add('car-cell');
      carCell.element.setAttribute('style', `background-color: ${carInfo.color}`);

      cells.push(
        new TableCell(`${i + 1}`).element,
        carCell.element,
        new TableCell(`${carInfo.name}`).element,
        new TableCell(`${winInfo.wins}`).element,
        new TableCell(`${winInfo.time}`).element,
      );

      this.element.appendChild(new TableRow(cells).element);
    });
  }
}

export default Table;
