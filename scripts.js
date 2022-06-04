const grid = document.getElementById('container');

function makeGrid() {
    for (let i = 0; i < 256; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')
        item.style.border = '1px solid red';

        grid.appendChild(item);
    }
}

makeGrid()
