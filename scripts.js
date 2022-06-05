const grid = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const rgbBtn = document.getElementById('rgbBtn');
const eraserBtn = document.getElementById('eraserBtn');
const blackBtn = document.getElementById('blackBtn');
const smallBtn = document.getElementById('sizeOne');
const mediumBtn = document.getElementById('sizeTwo');
const largeBtn = document.getElementById('sizeThree');
const resetSizeBtn = document.getElementById('resetSize');


function makeGrid() {
    for (let i = 0; i < 256; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')

        grid.appendChild(item);
    }
}

function changeColor() {
    let gridSquares = document.querySelectorAll('.gridItem');
   
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.style.background = 'black';
        });
    })
}

function reset() {
    let gridSquares = document.querySelectorAll('.gridItem');
   
    gridSquares.forEach(square => {
        square.style.background = 'grey';
    })
}

function eraser() {
    let gridSquares = document.querySelectorAll('.gridItem');
   
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.style.background = 'grey';
        });
    })
}

function prideMonth() {
    let gridSquares = document.querySelectorAll('.gridItem');
   
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', function() {
            let r = Math.floor((Math.random()* 255 ) + 1);
            let g = Math.floor((Math.random()* 255 ) + 1);
            let b = Math.floor((Math.random()* 255 ) + 1);
            
            square.style.background = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

function smallGrid() {
    const grid = document.getElementById('container');

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < 100; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')

        grid.style.gridTemplateRows = `repeat(10, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(10, 1fr)`;

        grid.appendChild(item);
    }

    changeColor();
}

function mediumGrid() {
    const grid = document.getElementById('container');

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < 400; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')

        grid.style.gridTemplateRows = `repeat(20, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(20, 1fr)`;

        grid.appendChild(item);
    }

    changeColor();
}

function largeGrid() {
    const grid = document.getElementById('container');

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < 900; i++) {
        let item = document.createElement('div')
        item.classList.add('gridItem')

        grid.style.gridTemplateRows = `repeat(30, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(30, 1fr)`;

        grid.appendChild(item);
    }

    changeColor();
}

function reload() {
    reload = location.reload();
}

makeGrid();
changeColor();


resetBtn.addEventListener('click', reset)
blackBtn.addEventListener('click', changeColor)
eraserBtn.addEventListener('click', eraser)
rgbBtn.addEventListener('click', prideMonth)
smallBtn.addEventListener('click', smallGrid)
mediumBtn.addEventListener('click', mediumGrid)
largeBtn.addEventListener('click', largeGrid)
resetSizeBtn.addEventListener('click', reload)