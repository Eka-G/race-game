import BaseComponent from '../base-component';
import './button.scss';

class Button extends BaseComponent<HTMLButtonElement> {
  constructor(title: string, listenerFunc?: () => void) {
    super('button', ['button']);

    this.element.innerHTML = `${title}`;
    if (listenerFunc) {
      this.element.addEventListener('click', listenerFunc);
    }
  }
}

export default Button;
