import './page.scss';

class Page {
  readonly element: HTMLDivElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('content');
  }
}

export default Page;
