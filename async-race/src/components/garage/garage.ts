import BaseComponent from '../base-component';
import SmartTitle from '../smart-title';
import GaragePage from '../garage-page';
import Button from '../button';
import { appendElements } from '../../shared';
import './garage.scss';

class Garage extends BaseComponent {
  private garagePage = new GaragePage();

  private mainTitle = new SmartTitle('h1', 'main-title', 'Garage()');

  private pageTitle = new SmartTitle('h2', 'page-title', 'Page #');

  private prevBtn = new Button('prev');

  private nextBtn = new Button('next');

  constructor() {
    super();

    appendElements(
      this.element,
      this.mainTitle.element,
      this.pageTitle.element,
      this.garagePage.element,
      this.prevBtn.element,
      this.nextBtn.element,
    );

    this.prevBtn.element.classList.add('button--bg-main');
    this.nextBtn.element.classList.add('button--bg-main');
  }
}

export default Garage;
