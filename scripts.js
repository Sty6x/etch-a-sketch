// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');





const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        console.log(i)
        let grids = document.createElement('div');
        grids.classList.toggle('grids');
        grids.style.border = '2px solid red';
        gridContainer.appendChild(grids);
    }
}

createGrid(16);