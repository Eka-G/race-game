import BaseComponent from '../base-component';
import Button from '../button';
import ColorSettings from '../color-settings';
import NameSettings from '../name-settings';
import { appendElements } from '../../shared';
import './panel-item.scss';

class PanelItem extends BaseComponent<HTMLFormElement> {
  public colorSettings = new ColorSettings();

  public nameSettings = new NameSettings('Input car brand', '[^~!@#$%*\\(\\)_—+=:;"\'`<>,\\.\\?/\\^\\|]+$');

  public btn;

  constructor(buttonName: string) {
    super('form', ['panel-item']);

    this.btn = new Button(buttonName);
    this.btn.element.disabled = true;

    this.nameSettings.element.addEventListener('input', () => {
      this.btn.element.disabled = !this.element.checkValidity();
    });

    appendElements(this.element, this.nameSettings.element, this.colorSettings.element, this.btn.element);
  }
}

export default PanelItem;
