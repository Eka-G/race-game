import TableCell from '../table-cell';
import { ChangeWinOpsEvent, winnersState } from '../../shared';
import './time-cell.scss';

class TimeCell extends TableCell {
  constructor() {
    super('Best time, sec');

    this.element.classList.add('time-cell');

    this.element.addEventListener('click', () => {
      winnersState.sort = 'time';
      winnersState.order = winnersState.order === 'ASD' ? 'DESC' : 'ASD';
      window.dispatchEvent(new ChangeWinOpsEvent());
    });
  }
}

export default TimeCell;
