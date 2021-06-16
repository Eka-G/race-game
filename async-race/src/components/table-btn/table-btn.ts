import Button from '../button';
import { appendElements } from '../../shared';

class TableRow extends Button {
  constructor(title: string, listenerFunc: () => void) {
    super(title, listenerFunc);

    this.element.classList.add('table__btn');
  }
}

export default TableRow;
