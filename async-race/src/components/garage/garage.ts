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

    window.addEventListener(ChangeGarageEvent.eventName, () => {
      this.updateTitles();
      this.updateBtns();
    });
  }

  private static async countCars() {
    const garageInfo = await fetch(`${url.garage}?_page=${garageState.currentPage}&_limit=${garageState.limit}`);
    const res = garageInfo.headers.get('X-Total-Count');
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
    this.updateBtns();

    this.nextBtn.element.addEventListener('click', () => {
      garageState.currentPage += 1;

      this.garagePage.updateContent();
    });

    this.prevBtn.element.addEventListener('click', () => {
      garageState.currentPage -= 1;

      this.garagePage.updateContent();
    });
  }

  public async updateTitles() {
    const carValue = await Garage.countCars();

    if (!(this.mainTitle && this.pageTitle)) return;

    this.mainTitle.element.innerText = `Garage(${carValue})`;
    this.pageTitle.element.innerText = `Page # ${garageState.currentPage}`;

    const carRemains = Number(carValue) - garageState.currentPage * garageState.limit;

    if (carRemains >= 1) this.nextBtn.element.disabled = false;
  }

  public async updateBtns() {
    const carValue = await Garage.countCars();

    const carNextRemains = Number(carValue) - garageState.currentPage * garageState.limit;
    const carPrevRemains = garageState.currentPage * garageState.limit;

    if (carNextRemains >= 1) {
      this.nextBtn.element.disabled = false;
    } else this.nextBtn.element.disabled = true;

    if (carPrevRemains > garageState.limit) {
      this.prevBtn.element.disabled = false;
    } else this.prevBtn.element.disabled = true;
  }
}

export default Garage;
