let gridSize = 16;

function createGrid(gridSize) {
    const grid = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("style", "display: flex; flex-direction: row; justifty-content: center; align-items: center;")
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("style", "margin: 0; padding: 0; width: 30px; height: 30px; border: 1px solid black; display: flex; flex: 0 1 auto;");
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}

createGrid(gridSize);
