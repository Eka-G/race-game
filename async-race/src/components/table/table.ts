import TableHead from '../table-head';
import BaseComponent from '../base-component';
import './table.scss';

class Table extends BaseComponent<HTMLTableElement> {
  private head = new TableHead();

  constructor() {
    super('table', ['table']);

    this.element.appendChild(this.head.element);
  }
}

export default Table;
