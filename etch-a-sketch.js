const divContainer = document.querySelector(".container");
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    let userInput = prompt('Enter a new square grid (max100):');
    userInput = Number(userInput);
    if (userInput > 100) {
        userInput = 100; //set limit to 100
    } else if (userInput < 1 || isNaN(userInput)) {
        userInput = 16; //back to default value
    }
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