import Button from '../button';
import './btn-movement.scss';

class MovementButton extends Button {
  constructor(title: string) {
    super(title);

    this.element.classList.add('btn-movement');
  }
}

export default MovementButton;
