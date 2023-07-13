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
        rowDiv.appendChild(itemDiv);
    }
}

createFlexGrid();