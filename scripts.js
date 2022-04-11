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
        grids.setAttribute('class','grids grid-column')
        grids.style.padding = paddingSize + 'px';
        gridContainer.appendChild(grids);
        // gridColumns.textContent = `${i}`
        drawGrid(grids, i);
        for(let j = 0; j < gridSize; j++){
            grids = document.createElement('div');
            grids.setAttribute('class','grids grid-column')
            grids.style.padding = paddingSize + 'px';
            gridContainer.appendChild(grids);
            console.log(grids.classList);
            drawGrid(grids, j);
        }
      
    }
    
}


 
function drawGrid(grids, position){
    grids.addEventListener('mouseenter', () =>{
        // console.log("mouse entered position: " + position)
        grids.style.backgroundColor = 'grey';
        grids.classList.add('colored-grid');
        console.log(grids.classList);
    })
    // grids.addEventListener('mouseleave', () =>{
    //     // console.log("mouse leave position: " + position)
    // })

}



function resetGrid(grid){

}


//bug overflowing second parameter(paddingSize) is above 15
//bug asymmetrical grids first parameter(gridSize) is change differently
createGrid(16, 16);