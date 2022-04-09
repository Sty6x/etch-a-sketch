// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');
let gridColumns;
let gridRows;


// todo
//make container have a fixed size and grids have flex grow

const createGrid = (gridSize, paddingSize) => {
    for (let i = 0; i < gridSize; i++) {
        // console.log(i)
        gridColumns = document.createElement('div');
        gridColumns.setAttribute('class','grids grid-column')
        gridColumns.style.padding = paddingSize + 'px';
        gridContainer.appendChild(gridColumns);
        // gridColumns.textContent = `${i}`
        for(let j = 0; j < gridSize; j++){
            // console.log(j)
            gridRows = document.createElement('div');
            gridRows.setAttribute('class','grids grid-row')
            gridRows.style.padding = paddingSize + 'px';
            gridContainer.appendChild(gridRows);
            // gridRows.textContent = `${j}`
            // draw(gridColumns,gridRows);
            gridRows.addEventListener('mouseenter', () =>{
                console.log("mouse entered position: " + j)
            })
            gridRows.addEventListener('mouseleave', () =>{
                console.log("mouse leave position: " + j)
            })
        }
        // drawGrid(gridColumns,gridRows);
    }

    
}

 
function drawGrid(column,rows){
    column.addEventListener('mouseenter', () =>{
        console.log("mouse entered")
    })
    rows.addEventListener('mouseenter', () =>{
        console.log("mouse entered")
    })
    column.addEventListener('mouseleave', () =>{
        console.log("mouse leave")
    })
    rows.addEventListener('mouseleave', () =>{
        console.log("mouse leave")
    })

}


//bug overflowing second parameter(paddingSize) is above 15
//bug asymmetrical grids first parameter(gridSize) is change differently
createGrid(16, 16);