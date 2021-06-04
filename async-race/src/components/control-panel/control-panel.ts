import BaseComponent from '../base-component';
import Button from '../button';
import PanelItem from '../panel-item';
import appendElements from '../../shared/appendFunc';
import './control-panel.scss';

class ControlPanel extends BaseComponent {
  private createItem = new PanelItem('create');

  private updateItem = new PanelItem('update');

  private raceBtn = new Button('race');

  private resetBtn = new Button('reset');

  private generateBtn = new Button('generate cars');

  constructor() {
    super('div', ['controlPanel']);

    appendElements(
      this.element,
      this.createItem.element,
      this.updateItem.element,
      this.raceBtn.element,
      this.resetBtn.element,
      this.generateBtn.element,
    );
  }
}

export default ControlPanel;
