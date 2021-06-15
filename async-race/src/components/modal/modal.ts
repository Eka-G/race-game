import SmartTitle from '../smart-title';
import BaseComponent from '../base-component';
import './modal.scss';

class Modal extends BaseComponent {
  constructor(name: string, time: string) {
    super('div', ['modal']);

    const title = new SmartTitle('h2', 'modal__title', `${name} finished first ${time}s`);

    this.element.appendChild(title.element);

    this.element.addEventListener('click', () => {
      this.element.parentNode?.removeChild(this.element);
    });
  }
}

export default Modal;
