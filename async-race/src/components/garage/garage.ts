import BaseComponent from '../base-component';
import SmartTitle from '../smart-title';
import GaragePage from '../garage-page';
import Button from '../button';
import { appendElements, ChangeGarageEvent, garageState, url } from '../../shared';
import './garage.scss';

class Garage extends BaseComponent {
  private garagePage = new GaragePage();

  private mainTitle?: SmartTitle;

  private pageTitle?: SmartTitle;

  private prevBtn = new Button('prev');

  private nextBtn = new Button('next');

  constructor() {
    super('div', ['garage']);

    this.prevBtn.element.disabled = true;
    this.nextBtn.element.disabled = true;

    this.render();

    window.addEventListener(ChangeGarageEvent.eventName, () => this.updateTitles());
  }

  private static async countCars() {
    const garageInfo = await fetch(`${url.garage}?_page=${garageState.currentPage}&_limit=${garageState.limit}`);
    const res = garageInfo.headers.get('X-Total-Count');
    console.log(res);
    return res;
  }

  private async render() {
    const carValue = await Garage.countCars();
    this.mainTitle = new SmartTitle('h1', 'main-title', `Garage(${carValue})`);

    this.pageTitle = new SmartTitle('h2', 'page-title', `Page # ${garageState.currentPage}`);

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

  public async updateTitles() {
    const carValue = await Garage.countCars();

    if (!(this.mainTitle && this.pageTitle)) return;

    this.mainTitle.element.innerText = `Garage(${carValue})`;
    this.pageTitle.element.innerText = `Page # ${garageState.currentPage}`;
  }
}

export default Garage;
