import BaseComponent from '../base-component';
import Button from '../button';
import ColorSettings from '../color-settings';
import NameSettings from '../name-settings';
import appendElements from '../../shared/appendFunc';
import { CreateEvent } from '../../shared';
import './panel-item.scss';

class PanelItem extends BaseComponent<HTMLFormElement> {
  private colorSettings = new ColorSettings();

  private nameSettings = new NameSettings('Input car brand', '[^~!@#$%*\\(\\)_—+=:;"\'`<>,\\.\\?/\\^\\|]+$');

  private btn;

  constructor(buttonName: string) {
    super('form', ['panel-item']);

    this.btn = new Button(buttonName);
    this.btn.element.disabled = true;

    this.nameSettings.element.addEventListener('input', () => {
      this.btn.element.disabled = !this.element.checkValidity();
    });

    this.btn.element.addEventListener('click', (event) => {
      event.preventDefault();

      window.dispatchEvent(
        new CreateEvent({
          name: this.nameSettings.element.value,
          color: this.colorSettings.element.value,
        }),
      );
    });

    appendElements(this.element, this.nameSettings.element, this.colorSettings.element, this.btn.element);
  }
}

export default PanelItem;
