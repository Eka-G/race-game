import TableCell from '../table-cell';
import WinsCell from '../wins-cell';
import TimeCell from '../time-cell';
import TableRow from '../table-row';
import BaseComponent from '../base-component';
import './table-head.scss';

class TableHead extends BaseComponent {
  private row;

  private cells = [];

  constructor() {
    super('thead', ['table__head']);

    const numberCell = new TableCell('Number');
    const carCell = new TableCell('Car color');
    const nameCell = new TableCell('Name');
    const winsCell = new WinsCell();
    const timeCell = new TimeCell();

    this.row = new TableRow([
      numberCell.element,
      carCell.element,
      nameCell.element,
      winsCell.element,
      timeCell.element,
    ]);

    this.element.appendChild(this.row.element);
  }
}

export default TableHead;
