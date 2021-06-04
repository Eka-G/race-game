import BaseComponent from '../base-component';
import Button from '../button';
import './header.scss';

class Header extends BaseComponent {
  private garageBtn = new Button('Check garage');

  private winnersBtn = new Button('Check winners');

  constructor() {
    super('header', ['header']);

    this.element.appendChild(this.garageBtn.element);
    this.element.appendChild(this.winnersBtn.element);
  }
}

export default Header;
