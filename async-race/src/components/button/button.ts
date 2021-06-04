import BaseComponent from '../base-component';
import './button.scss';

class Button extends BaseComponent {
  constructor(title: string) {
    super('button', ['button']);

    this.element.innerHTML = `${title}`;
  }
}

export default Button;
