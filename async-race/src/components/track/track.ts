import BaseComponent from '../base-component';
import Car from '../car';
import Finish from '../finish';
import './track.scss';

class Track extends BaseComponent {
  private car = new Car();

  private finish = new Finish();

  constructor() {
    super('div', ['track']);

    this.element.appendChild(this.car.element);
    this.element.appendChild(this.finish.element);
  }
}

export default Track;
