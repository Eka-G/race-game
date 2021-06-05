import BaseComponent from '../base-component';

class SmartTitle extends BaseComponent {
  constructor(tag: keyof HTMLElementTagNameMap, className: string, text: string) {
    super(tag, [className]);

    this.element.innerText = text;
  }
}

export default SmartTitle;
