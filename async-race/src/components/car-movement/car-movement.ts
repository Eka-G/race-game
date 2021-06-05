import BaseComponent from '../base-component';
import MovementButton from '../btn-movement';
import appendElements from '../../shared/appendFunc';
import './car-movement.scss';

class CarMovement extends BaseComponent {
  private startButton = new MovementButton('A');

  private stopButton = new MovementButton('B');

  constructor() {
    super('div', ['car-movement']);

    appendElements(this.element, this.startButton.element, this.stopButton.element);
    this.stopButton.toggleUnactive();
  }
}

export default CarMovement;
