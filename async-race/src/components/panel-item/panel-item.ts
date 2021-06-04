import BaseComponent from '../base-component';
import Button from '../button';
import ColorSettings from '../color-settings';
import NameSettings from '../name-settings';
import appendElements from '../../shared/appendFunc';
import './panel-item.scss';

class PanelItem extends BaseComponent {
  private colorSettings = new ColorSettings();

  private nameSettings = new NameSettings('Input car brand');

  private btn;

  constructor(buttonName: string) {
    super('div', ['panel-item']);

    this.btn = new Button(buttonName);

    appendElements(this.element, this.nameSettings.element, this.colorSettings.element, this.btn.element);
  }
}

export default PanelItem;
