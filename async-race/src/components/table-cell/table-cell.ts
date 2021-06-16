import BaseComponent from '../base-component';
import './table-cell.scss';

class TableCell extends BaseComponent<HTMLTableCellElement> {
  constructor(content?: string, btn?: HTMLButtonElement) {
    super('td', ['table__cell']);

    if (content) this.element.innerText = `${content}`;
    if (btn) this.element.appendChild(btn);
  }
}

export default TableCell;
