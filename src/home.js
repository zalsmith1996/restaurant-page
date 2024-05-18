export default function Home() {
    const contentContainer = document.querySelector('.content');

    contentContainer.textContent = '';

    const welcome = document.createElement('div');
    welcome.classList.add('welcome');

    const info = document.createElement('p');
    info.classList.add('text');
    info.textContent = 'Welcome to "That Place That Sells Stuff!"';

    const instructions = document.createElement('p');
    instructions.classList.add('text');
    instructions.textContent = 'Click the tabs above to navigate.';

    welcome.append(info);
    welcome.append(instructions);
    contentContainer.append(welcome);
}