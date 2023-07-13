function createFlexGrid() {
    const flexGrid = document.createElement('div');
    flexGrid.classList.add('flexGrid');
    createRows();
    document.querySelector('body').appendChild(flexGrid);
}

function createRows() {
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('flexRow');
        rowDiv.id = `row${i}`;
        createItems(i);
        flexGrid.appendChild(rowDiv);
    }
}

function createItems(row) {
    const rowDiv = document.querySelector(`#row${row}`);
    for (let i = 0; i < 16; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('flexItem');
        rowDiv.appendChild(itemDiv);
    }
}

createFlexGrid();