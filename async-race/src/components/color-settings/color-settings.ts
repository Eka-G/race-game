import BaseComponent from '../base-component';

class ColorSettings extends BaseComponent<HTMLInputElement> {
  constructor() {
    super('input');

    this.element.setAttribute('name', 'color');
    this.element.setAttribute('type', 'color');
  }
}

export default ColorSettings;
