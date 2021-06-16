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
        this.garagePage.element.classList.remove('unactive-page');
        this.winnersPage.element.classList.add('unactive-page');
      }

      if (
        event.target === this.header.winnersBtn.element &&
        this.winnersPage.element.classList.contains('unactive-page')
      ) {
        this.winnersPage.element.classList.remove('unactive-page');
        this.garagePage.element.classList.add('unactive-page');
      }
    });
  }
}

export default App;
