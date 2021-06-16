import Header from './components/header';
import GaragePage from './pages/garage';
import WinnersPage from './pages/winners';

class App {
  private readonly header = new Header();

  private readonly garagePage = GaragePage;

  private readonly winnersPage = WinnersPage;

  constructor(private readonly rootElement: Element) {
    this.winnersPage.element.classList.add('unactive-page');

    this.rootElement.append(this.header.element, this.garagePage.element, this.winnersPage.element);

    this.header.element.addEventListener('click', (event) => {
      if (
        event.target === this.header.garageBtn.element &&
        this.garagePage.element.classList.contains('unactive-page')
      ) {
        App.toggleClass(this.garagePage.element, this.winnersPage.element);
      }

      if (
        event.target === this.header.winnersBtn.element &&
        this.winnersPage.element.classList.contains('unactive-page')
      ) {
        App.toggleClass(this.winnersPage.element, this.garagePage.element);
      }
    });
  }

  private static toggleClass(active: HTMLElement, unactive: HTMLElement) {
    active.classList.remove('unactive-page');
    unactive.classList.add('unactive-page');
  }
}

export default App;
