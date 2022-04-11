// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');
const resetButton = document.createElement('button');
const body = document.querySelector('body');
const header = document.querySelector('header');


body.insertBefore(resetButton, header);



// todo
//make container have a fixed size and grids have flex grow

const createGrid = (gridSize, paddingSize) => {
    let grids;
    for (let i = 0; i < gridSize; i++) {
        grids = document.createElement('div');
        grids.setAttribute('class', 'grids grid-column')
        grids.style.padding = paddingSize + 'px';
        gridContainer.appendChild(grids);
        // gridColumns.textContent = `${i}`
        drawGrid(grids, i);
        resetGrid(grids);

        for (let j = 0; j < gridSize; j++) {
            grids = document.createElement('div');
            grids.setAttribute('class', 'grids grid-column')
            grids.style.padding = paddingSize + 'px';
            gridContainer.appendChild(grids);
            // console.log(grids.classList);
            drawGrid(grids, j);
            resetGrid(grids);

        }
        resetGrid(grids);
    }


}


function drawGrid(grids, position) {
    grids.addEventListener('mouseenter', () => {
        // console.log("mouse entered position: " + position)
        grids.classList.add('colored-grid');
    })


}



function resetGrid(grid) {
    resetButton.addEventListener('click', () => {
        grid.classList.remove('colored-grid');
        console.log('clicked remove')
    })

}


//bug overflowing second parameter(paddingSize) is above 15
//bug asymmetrical grids first parameter(gridSize) is change differently
createGrid(16, 16);