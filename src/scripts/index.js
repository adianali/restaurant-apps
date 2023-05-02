/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/app-bar.js';
import './component/jumbotron.js';
import './component/footer.js';

const app = new App({
  button: document.querySelector('.garis'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
