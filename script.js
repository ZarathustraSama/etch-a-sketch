function createFlexGrid(size=16) {
    if (size < 100) {
        const flexGrid = document.createElement('div');
        flexGrid.classList.add('flexGrid');
        createRows(flexGrid, rows=size);
        document.querySelector('body').appendChild(flexGrid);
    }
    else return alert('Number must not exceed 100');
}

function createRows(flexGrid, rows) {
    if (rows < 100) {
        for (let i = 0; i < rows; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('flexRow');
            createItems(rowDiv, items=rows);
            flexGrid.appendChild(rowDiv);
        }
    }
    else return alert('Number must not exceed 100');
}

function createItems(rowDiv, items) {
    if (items < 100) {
        for (let i = 0; i < items; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('flexItem');
            itemDiv.setAttribute('data-brightness', 1.0);
            itemDiv.addEventListener('mouseover', () => {
                changeColor(itemDiv);
                addDarkness(itemDiv);
            })
            rowDiv.appendChild(itemDiv);
        }
    }
    else return alert('Number must not exceed 100');
}

function changeColor(itemDiv) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let randomHexColor = '#';
    for (let i = 0; i < 6; i++) {
        randomHexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    itemDiv.style.backgroundColor = randomHexColor;
}

function addDarkness(itemDiv) {
    let brightness = itemDiv.getAttribute('data-brightness');
    if (brightness > 0) {
        itemDiv.dataset.brightness = (brightness * 10 - 1) / 10;
        itemDiv.style.filter = `brightness(${itemDiv.dataset.brightness})`;
    }
}

createFlexGrid();

const changeGridButton = document.querySelector('#new-grid-size');
changeGridButton.onclick = () => {
    document.querySelector('body').removeChild(document.querySelector('.flexGrid'));
    createFlexGrid(size=parseInt(prompt('Choose a new grid size:')));
}