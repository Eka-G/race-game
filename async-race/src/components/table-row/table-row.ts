import BaseComponent from '../base-component';
import { appendElements } from '../../shared';

class TableRow extends BaseComponent<HTMLTableRowElement> {
  constructor(cells: HTMLTableCellElement[]) {
    super('tr', ['table__row']);

    appendElements(this.element, ...cells);
  }
}

export default TableRow;
