import App from './app';
import './scss/styles.scss';

window.onload = () => {
  const root = document.querySelector('.body');

  if (!root) throw Error('Root element not found');

  new App(root);
};
