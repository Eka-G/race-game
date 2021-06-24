import BaseComponent from '../base-component';
import Button from '../button';
import { appendElements, DeleteEvent, SelectEvent, UpdateEvent } from '../../shared';
import './car-info.scss';

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

    CarInfo.addListener(this.removeButton.element, new DeleteEvent(this.carId));
    CarInfo.addListener(this.selectButton.element, new SelectEvent(this.carId));
  }

  private static addListener(elem: HTMLButtonElement, customEvent: CustomEvent, needUpdate = false) {
    elem.addEventListener('click', () => {
      window.dispatchEvent(customEvent);

      if (needUpdate) window.dispatchEvent(new UpdateEvent());
    });
  }
}

export default CarInfo;
