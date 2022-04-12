// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');
const resetButton = document.createElement('button');
const setGridSizeButton = document.createElement('button');
const buttons = document.querySelector('.buttons');
const body = document.querySelector('body');

const header = document.querySelector('header');

resetButton.textContent = "Reset Grid";
setGridSizeButton.textContent = 'Set Grid Size';


//prompts grid size input on reset
buttons.appendChild(setGridSizeButton,gridContainer);


// console.log(size);

const createGrid = (gridSize) => {
    let grids;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grids = document.createElement('div');
            grids.setAttribute('class', 'grids grid-column')
            // grids.style.padding =  Size + 'px';
            gridContainer.appendChild(grids);
            drawGrid(grids,i,j);
            resetGrid(grids);
        }
    }
    
}


function drawGrid(grids,pos1, pos2) {
    grids.addEventListener('mouseenter', () => {
        console.log(pos1, pos2);
        grids.classList.add('colored-grid')
    })
}

buttons.appendChild(resetButton);
function resetGrid(grid) {
    resetButton.addEventListener('click', (e) => {
        grid.classList.remove('colored-grid');
        // console.log(e);
    })
}

//bug overflowing second parameter(paddingSize) 
//bug asymmetrical grids first parameter(gridSize) is change differently
changeSize(16);
