const divContainer = document.querySelector(".container");
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    let userInput = prompt('Enter a new square grid:');
    userInput = Number(userInput);
    
    createGrid(userInput);
})
function createGrid(n) {
    divContainer.replaceChildren(); //remove all child divs
    const squareSize = divContainer.clientWidth / n;
    for (let i = 0; i < n * n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        divContainer.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        })
    }
}
createGrid(16);