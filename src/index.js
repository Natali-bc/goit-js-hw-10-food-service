import menu from './menu.json';
import gallery from './templates/gallery-items.hbs';
import './styles.css';

const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', gallery(menu));

const bodyRef = document.querySelector('body');
const themeChange = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('theme') === 'dark-theme') {
  bodyRef.classList.add('dark-theme');
  themeChange.checked = true;
}

themeChange.addEventListener('change', e => {
  bodyRef.classList.toggle('light-theme');
  bodyRef.classList.toggle('dark-theme');
  if (themeChange.checked === true) {
    localStorage.setItem('theme', 'dark-theme');
  } else localStorage.setItem('theme', 'light-theme');
});
