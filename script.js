function createFlexGrid() {
    const flexGrid = document.createElement('div');
    flexGrid.classList.add('flexGrid');
    createRows(flexGrid);
    document.querySelector('body').appendChild(flexGrid);
}

function createRows(flexGrid) {
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('flexRow');
        createItems(rowDiv);
        flexGrid.appendChild(rowDiv);
    }
}

function createItems(rowDiv) {
    for (let i = 0; i < 16; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('flexItem');
        itemDiv.addEventListener('mouseover', () => changeColor(itemDiv));
        rowDiv.appendChild(itemDiv);
    }
}

function changeColor(itemDiv) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let randomHexColor = '#';
    for (let i = 0; i < 6; i++) {
        randomHexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    itemDiv.style.backgroundColor = randomHexColor;
}

createFlexGrid();