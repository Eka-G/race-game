import BaseComponent from '../base-component';
import Button from '../button';
import { appendElements } from '../../shared';
import './header.scss';

class Header extends BaseComponent {
  private garageBtn = new Button('Check garage');

  private winnersBtn = new Button('Check winners');

  constructor() {
    super('header', ['header']);

    this.garageBtn.element.classList.add('button--bg-main');
    this.winnersBtn.element.classList.add('button--bg-main');

    appendElements(this.element, this.garageBtn.element, this.winnersBtn.element);
  }
}

export default Header;
