// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');



const createGrid = (gridSize, paddingSize) => {
    for (let i = 0; i < gridSize; i++) {
        console.log(i)
        let gridColumns = document.createElement('div');
        gridColumns.setAttribute('class','grids grid-column')
        gridColumns.style.border = '2px solid red';
        gridColumns.style.padding = paddingSize;
        gridContainer.appendChild(gridColumns);
        for(let j = 0; j < gridSize; j++){
            console.log(j)
            let gridRows = document.createElement('div');
            gridRows.setAttribute('class','grids grid-row')
            gridRows.style.border = '2px solid red';
            gridRows.style.padding = paddingSize;
            gridContainer.appendChild(gridRows);
        }
    }
}

createGrid(4, '20px');