import Header from './components/header';

class App {
  private readonly header = new Header();

  constructor(private readonly rootElement: Element) {
    this.rootElement.appendChild(this.header.element);
  }
}

export default App;
