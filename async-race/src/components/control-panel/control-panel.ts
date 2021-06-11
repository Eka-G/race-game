import BaseComponent from '../base-component';
import Button from '../button';
import CreatePanel from '../create-panel-item';
import UpdaterPanel from '../update-panel-item';
import { appendElements } from '../../shared';
import './control-panel.scss';

class ControlPanel extends BaseComponent {
  private createItem = new CreatePanel();

  private updateItem = new UpdaterPanel();

  private raceBtn = new Button('race');

  private resetBtn = new Button('reset');

  private generateBtn = new Button('generate cars');

  constructor() {
    super('div', ['control-panel']);

    appendElements(
      this.element,
      this.createItem.element,
      this.updateItem.element,
      this.raceBtn.element,
      this.resetBtn.element,
      this.generateBtn.element,
    );

    this.raceBtn.element.classList.add('button--bg-main');
    this.resetBtn.element.classList.add('button--bg-main');
  }
}

export default ControlPanel;
