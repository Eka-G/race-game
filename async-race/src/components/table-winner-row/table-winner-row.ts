import type { CarInterface, WinResponce } from '../../types';
import TableRow from '../table-row';
import TableCell from '../table-cell';
import { url } from '../../shared';

class TableWinnerRow extends TableRow {
  constructor(private winRes: WinResponce, private index: number) {
    super([]);

    this.main();
  }

  private async main() {
    const carInfoResponce = await fetch(`${url.garage}/${this.winRes.id}`);
    const carInfo: CarInterface = await carInfoResponce.json();
    const cells = [];
    const carCell = new TableCell(``);
    carCell.element.classList.add('car-cell');
    carCell.element.setAttribute('style', `background-color: ${carInfo.color}`);

    cells.push(
      new TableCell(`${this.index}`).element,
      carCell.element,
      new TableCell(`${carInfo.name}`).element,
      new TableCell(`${this.winRes.wins}`).element,
      new TableCell(`${this.winRes.time}`).element,
    );

    this.element.append(...cells);
  }
}

export default TableWinnerRow;
