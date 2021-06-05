import Button from '../button';
import './btn-movement.scss';

class MovementButton extends Button {
  constructor(title: string) {
    super(title);

    this.element.classList.add('btn-movement');
  }

  toggleUnactive() {
    this.element.classList.toggle('btn-movement-unactive');
  }
}

export default MovementButton;
