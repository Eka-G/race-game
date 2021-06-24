import BaseComponent from '../base-component';
import SmartTitle from '../smart-title';
import Button from '../button';
import { appendElements } from '../../shared';

class PageStructure extends BaseComponent {
  protected content = new BaseComponent();

  private mainTitle?: SmartTitle;

  private pageTitle?: SmartTitle;

  private prevBtn = new Button('prev');

  private nextBtn = new Button('next');

  private getCurrentPage: () => number;

  private setCurrentPage: (currentPage: number) => void;

  private limitPage;

  private pageUrl;

  protected updateFunc;

  protected pageName;

  constructor(pageSettings: {
    pageName: string;
    pageClass: string;
    pageUrl: string;
    getCurrentPage: () => number;
    setCurrentPage: (currentPage: number) => void;
    limitPage: number;
    updateFunc: () => void;
  }) {
    super('div', [pageSettings.pageClass]);

    this.getCurrentPage = pageSettings.getCurrentPage;
    this.setCurrentPage = pageSettings.setCurrentPage;
    this.limitPage = pageSettings.limitPage;
    this.pageUrl = pageSettings.pageUrl;
    this.updateFunc = pageSettings.updateFunc;
    this.pageName = pageSettings.pageName;

    this.prevBtn.element.disabled = true;
    this.nextBtn.element.disabled = true;

    this.render();
  }

  private async countRecords() {
    const garageInfo = await fetch(`${this.pageUrl}?_page=${this.getCurrentPage()}&_limit=${this.limitPage}`);
    const res = garageInfo.headers.get('X-Total-Count');
    return res;
  }

  private async render() {
    const recordsValue = await this.countRecords();
    this.mainTitle = new SmartTitle('h1', 'main-title', `${this.pageName}(${recordsValue})`);

    this.pageTitle = new SmartTitle('h2', 'page-title', `Page # ${this.getCurrentPage()}`);

    appendElements(
      this.element,
      this.mainTitle.element,
      this.pageTitle.element,
      this.content.element,
      this.prevBtn.element,
      this.nextBtn.element,
    );

    this.prevBtn.element.classList.add('button--bg-main');
    this.nextBtn.element.classList.add('button--bg-main');
    this.updateBtns();

    this.nextBtn.element.addEventListener('click', () => {
      this.setCurrentPage(this.getCurrentPage() + 1);

      this.updateFunc();
    });

    this.prevBtn.element.addEventListener('click', () => {
      this.setCurrentPage(this.getCurrentPage() - 1);

      this.updateFunc();
    });
  }

  public async updateTitles(): Promise<void> {
    const recordValue = await this.countRecords();

    if (!(this.mainTitle && this.pageTitle)) return;

    this.mainTitle.element.innerText = `Garage(${recordValue})`;
    this.pageTitle.element.innerText = `Page # ${this.getCurrentPage()}`;

    const carRemains = Number(recordValue) - this.getCurrentPage() * this.limitPage;

    if (carRemains >= 1) this.nextBtn.element.disabled = false;
  }

  public async updateBtns(): Promise<void> {
    const recordValue = await this.countRecords();

    const recordNextRemains = Number(recordValue) - this.getCurrentPage() * this.limitPage;
    const recordPrevRemains = this.getCurrentPage() * this.limitPage;

    if (recordNextRemains >= 1) {
      this.nextBtn.element.disabled = false;
    } else this.nextBtn.element.disabled = true;

    if (recordPrevRemains > this.limitPage) {
      this.prevBtn.element.disabled = false;
    } else this.prevBtn.element.disabled = true;
  }
}

export default PageStructure;
