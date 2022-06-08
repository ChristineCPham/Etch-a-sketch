// Create divs & out into grid
const root = document.querySelector(':root');
const container = document.querySelector('#container');

let divSideNumber = 6;
let totalDivs = Math.pow(divSideNumber, 2);
root.style.setProperty('--divNumber', divSideNumber);

for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div');
    div.classList.add('sketchDiv');
    container.appendChild(div);
}

// Add color sketching properties
const divs = document.querySelectorAll('.sketchDiv');
divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style['background-color'] = 'pink';
    });
});

//Change the number of divs


//Reset the sketch pad
const reset = document.querySelector('#reset');
divs.forEach((div) => {
    reset.addEventListener('click', () => {
        div.style['background-color'] = 'white';
    });
});
    

