import BaseComponent from '../base-component';

class ColorSettings extends BaseComponent {
  constructor() {
    super('input');

    this.element.setAttribute('type', 'color');
  }
}

export default ColorSettings;
