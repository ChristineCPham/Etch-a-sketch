const root = document.querySelector(':root');
const container = document.querySelector('#container');
let divSideNumber = 16;
let totalDivs;
playSketch();

//Change the number of divs
const setDivNumber = document.querySelector('#setDivNumber');
setDivNumber.addEventListener('click', () => {
    newGrid();
});

//Make new grid
function newGrid() {
    deleteGrid();
    divSideNumber = prompt('How many squares would you like on each side?');
    playSketch();
}

// Create divs & puts into grid
function createGrid() {
    totalDivs = Math.pow(divSideNumber, 2);

    root.style.setProperty('--divNumber',   divSideNumber);

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('sketchDiv');
        container.appendChild(div);
    }
}

//Delete old grid
function deleteGrid() {
    for (let i = 0; i < totalDivs; i++) {
        const sketchPad = document.querySelector('.sketchDiv');
        container.removeChild(sketchPad);
    }
}

// Add color sketching properties
function sketch() {
    const divs = document.querySelectorAll('.sketchDiv');
    divs.forEach((div) => {
       div.addEventListener('mouseenter', () => {
           div.style['background-color'] = 'pink';
       });
    });
}

//Reset the sketch pad
function reset() {
    const divs = document.querySelectorAll('.sketchDiv');
    const reset = document.querySelector('#reset');
    divs.forEach((div) => {
        reset.addEventListener('click', () => {
            div.style['background-color'] = 'white';
        });
    });
}

//Combine all of the functions
function playSketch() {
    createGrid();
    sketch();
    reset();
}


    

