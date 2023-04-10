const container = document.querySelector('.container');

let gridSide = 4;
let gridSize = getComputedStyle(container).getPropertyValue('width');
gridSize = Number(gridSize.substring(0, gridSize.length-2));

function drawGrid(size, side) {
    let pxDimension = String(size/side) + 'px';
    for (let i = 0; i < side*side; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = pxDimension;
        div.style.height = pxDimension;
        div.addEventListener('mouseover', (e) => {
            e.target.style['background-color'] = '#000000';
        })
        container.appendChild(div);
    }
}

document.querySelector('.setGridBtn').addEventListener('click', (e) => {
    gridSide = Number(prompt('Enter your number of desired grid', '4'));
    if (gridSize > 100)
        gridSize = 100;
    gridSize = getComputedStyle(container).getPropertyValue('width');
    gridSize = Number(gridSize.substring(0, gridSize.length-2));
    document.querySelectorAll('.square').forEach((square) => square.remove());
    drawGrid(gridSize, gridSide);
})

drawGrid(gridSize, gridSide);