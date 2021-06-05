import BaseComponent from '../base-component';
import Button from '../button';
import appendElements from '../../shared/appendFunc';
import './car-info.scss';

class CarInfo extends BaseComponent {
  private selectButton = new Button('select');

  private removeButton = new Button('remove');

  private title = new BaseComponent('h2', ['carModel']);

  constructor(carModel: string) {
    super('div', ['car-info']);

    this.title.element.innerText = carModel;

    appendElements(this.element, this.selectButton.element, this.removeButton.element, this.title.element);
  }
}

export default CarInfo;
