export default function Menu() {
    const contentContainer = document.querySelector('.content');
    const items = [];

    contentContainer.textContent = '';

    const cell = document.createElement('div');
    cell.classList.add('cell');

    for (let i = 0; i <= 3; i++) {
        items[i] = document.createElement('p');
        items[i].textContent = 'Something on the menu';
        cell.appendChild(items[i]);
    }

    contentContainer.append(cell);
}