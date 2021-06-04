import BaseComponent from '../base-component';
import './name-settings.scss';

class NameSettings extends BaseComponent {
  constructor(plaseholder: string) {
    super('input', ['name-settings']);

    this.element.setAttribute('placeholder', plaseholder);
  }
}

export default NameSettings;
