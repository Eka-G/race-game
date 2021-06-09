import BaseComponent from '../base-component';
import './car.scss';
import { CarInterface } from '../../shared';

class Car extends BaseComponent {
  private name: string;

  constructor(data: CarInterface) {
    super('div', ['car']);

    this.element.setAttribute('style', `background-color: ${data.color}`);
    this.name = data.name;
  }
}

export default Car;
