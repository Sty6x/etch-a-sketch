// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');
const resetButton = document.createElement('button');
const body = document.querySelector('body');
const header = document.querySelector('header');
resetButton.textContent = "Reset Grid";

body.insertBefore(resetButton, gridContainer);


// todo
//make container have a fixed size and grids have flex grow

const createGrid = (gridSize, Size) => {
    let grids;
    for (let i = 0; i < gridSize; i++) {
        // grids = document.createElement('div');
        // grids.setAttribute('class', 'grids grid-column')
        // grids.style.padding = Size + 'px';
        // gridContainer.appendChild(grids);
        // drawGrid(grids);
        // resetGrid(grids);
        for (let j = 0; j < gridSize; j++) {
            grids = document.createElement('div');
            grids.setAttribute('class', 'grids grid-column')
            grids.style.padding = Size + 'px';
            gridContainer.appendChild(grids);
            drawGrid(grids);
            resetGrid(grids);
        }
        resetGrid(grids);
    }
}


function drawGrid(grids) {
    grids.addEventListener('mouseenter', () => grids.classList.add('colored-grid'))
}

function resetGrid(grid) {
    resetButton.addEventListener('click', () => {
        grid.classList.remove('colored-grid');
        console.log('clicked remove')
    })
}


//bug overflowing second parameter(paddingSize) is above 15
//bug asymmetrical grids first parameter(gridSize) is change differently
createGrid(12, 26);
