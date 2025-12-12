const divContainer = document.querySelector(".container");

function createGrid(n) {
    divContainer.replaceChildren(); //remove all child divs
    const squareSize = divContainer.clientWidth / n;
    for (let i = 0; i < n * n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        divContainer.appendChild(square);
    }
}
createGrid(16);