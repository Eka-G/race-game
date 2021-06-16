import TableCell from '../table-cell';
import { RerenderWinnersEvent, winnersState } from '../../shared';
import './wins-cell.scss';

class WinsCell extends TableCell {
  constructor() {
    super('Wins');

    this.element.classList.add('wins-cell');

    this.element.addEventListener('click', () => {
      winnersState.sort = 'wins';
      winnersState.order = winnersState.order === 'ASD' ? 'DESC' : 'ASD';
      window.dispatchEvent(new RerenderWinnersEvent());
    });
  }
}

export default WinsCell;
