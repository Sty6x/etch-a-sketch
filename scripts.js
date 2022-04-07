// const gridContainer = document.getElementsByClassName('grid-container');
const gridContainer = document.querySelector('.grid-container');
const gridRows = document.createElement('div');
const gridCol = document.createElement('div');
gridRows.classList.toggle('grids');
gridCol.classList.toggle('grids');
// gridRows.style.border = '2px solid red';


let col = 4;
let row = 4;


for (let i = 0; i < col; i++) {
    console.log(i)
    gridContainer.appendChild(gridCol);
    gridCol.style.border = '2px solid red';
    gridCol.textContent = `${i}`
    for (let j = 0; j < row; j++) {
        gridContainer.appendChild(gridRows);
        gridRows.style.border = '2px solid red';
        gridRows.textContent = `${j}`
        console.log(j)
    }
}