import BaseComponent from '../base-component';
import Car from '../car';
import Finish from '../finish';
import './track.scss';
import { CarInterface } from '../../shared';

class Track extends BaseComponent {
  private car;

  private finish = new Finish();

  constructor(car: CarInterface) {
    super('div', ['track']);

    this.car = new Car(car);
    this.element.appendChild(this.car.element);
    this.element.appendChild(this.finish.element);
  }
}

export default Track;
