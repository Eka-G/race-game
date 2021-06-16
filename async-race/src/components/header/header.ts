import BaseComponent from '../base-component';
import Button from '../button';
import { appendElements } from '../../shared';
import './header.scss';

class Header extends BaseComponent {
  public garageBtn = new Button('Check garage');

  public winnersBtn = new Button('Check winners');

  constructor() {
    super('header', ['header']);

    this.garageBtn.element.classList.add('button--bg-main');
    this.winnersBtn.element.classList.add('button--bg-main');

    appendElements(this.element, this.garageBtn.element, this.winnersBtn.element);
  }
}

export default Header;
