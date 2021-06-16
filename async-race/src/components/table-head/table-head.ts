import TableCell from '../table-cell';
import TableRow from '../table-row';
import BaseComponent from '../base-component';
import './table-head.scss';

class TableHead extends BaseComponent {
  private row;

  private cells = [];

  constructor() {
    super('thead', ['table__head']);

    const numberCell = new TableCell('Number');
    const carCell = new TableCell('Car');
    const winsCell = new TableCell('Wins');
    const timeCell = new TableCell('Best time, sec');

    this.row = new TableRow([numberCell.element, carCell.element, winsCell.element, timeCell.element]);

    this.element.appendChild(this.row.element);
  }
}

export default TableHead;