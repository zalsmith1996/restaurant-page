import './style.css';
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderAbout from './about.js';

function initialize() {
    const content = document.querySelector('.content');
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');


    home.addEventListener('click', () => { renderHome() });
    menu.addEventListener('click', () => { renderMenu() });
    about.addEventListener('click', () => { renderAbout() });


    renderHome();
}

initialize();