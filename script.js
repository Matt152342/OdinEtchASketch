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

function hover() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", (element) => {
            cell.setAttribute("style", "margin: 0; padding: 0; width: 30px; height: 30px; border: 1px solid; background-color: gray; display: flex; flex: 0 1 auto;");
            cell.classList.add("hovered");
        });
        cell.addEventListener("mouseleave", (element) => {
            cell.setAttribute("style", "margin: 0; padding: 0; width: 30px; height: 30px; background-color: black; border: 1px solid black ; display: flex; flex: 0 1 auto;")
        });
    });
}

function getGridSize() {
    const button = document.querySelector(".gridButton");
    button.addEventListener('click', () => {
        do {
            size = Number(prompt("Enter new grid size: "));
        } while (size > 64 || !Number(size));

        const cells = document.querySelectorAll(".cell");
        cells.forEach((element) => element.remove());
        createGrid(size);
        hover();
    });
}

getGridSize();
createGrid(gridSize);
hover();
