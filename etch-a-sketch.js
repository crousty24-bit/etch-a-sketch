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

function randomColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

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
            square.style.backgroundColor = randomColor();
        })
    }
}
createGrid(16);

// randomColor func : takes random decimal * 256 (there 256 rgb values: 0 to 255)
// round up that number with Math.floor
// random value for each r g b variable
// replace our initial color with our new func at line32