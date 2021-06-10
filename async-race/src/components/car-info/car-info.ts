import BaseComponent from '../base-component';
import Button from '../button';
import appendElements from '../../shared/appendFunc';
import './car-info.scss';
import { DeleteEvent } from '../../shared';

class CarInfo extends BaseComponent {
  private selectButton = new Button('select');

  public removeButton = new Button('remove');

  private title = new BaseComponent('h2', ['carModel']);

  private carId;

  constructor(carModel: string, carId: number) {
    super('div', ['car-info']);

    this.carId = carId;
    this.title.element.innerText = carModel;

    appendElements(this.element, this.selectButton.element, this.removeButton.element, this.title.element);

    this.removeButton.element.addEventListener('click', () => {
      window.dispatchEvent(new DeleteEvent(this.carId));
    });
  }
}

export default CarInfo;
