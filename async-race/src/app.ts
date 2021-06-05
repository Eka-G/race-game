import Header from './components/header';
import GaragePage from './pages/garage';

class App {
  private readonly header = new Header();

  private readonly garagePage = GaragePage;

  constructor(private readonly rootElement: Element) {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.garagePage.element);
  }
}

export default App;
