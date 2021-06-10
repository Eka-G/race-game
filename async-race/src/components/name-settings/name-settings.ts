import BaseComponent from '../base-component';
import './name-settings.scss';

class NameSettings extends BaseComponent<HTMLInputElement> {
  constructor(plaseholder: string, pattern?: string) {
    super('input', ['name-settings']);

    this.element.setAttribute('name', 'name');
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeholder', plaseholder);

    if (pattern) {
      this.element.setAttribute('pattern', pattern);
    }
  }
}

export default NameSettings;
