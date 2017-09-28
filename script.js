// ui variables
var heading = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
// variable setup
var colors, pickedColor;
var isHard = true;
var hard = 6;
var easy = 3;

// start game
setupGame(hard);

// add event listener to reset btn
resetBtn.addEventListener("click", function() {
    if (isHard) {
        setupGame(hard);
    } else {
        setupGame(easy);
    }
});

// add event listener to easy btn
easyBtn.addEventListener("click", function() {
    isHard = !isHard;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    setupGame(easy);
});

// add event listener to hard btn
hardBtn.addEventListener("click", function() {
    isHard = !isHard;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    setupGame(hard);
});

function setupGame(numSquares) {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random color
    pickedColor = selectRandomColor();
    // change display color
    colorDisplay.textContent = pickedColor;
    // change message text
    messageDisplay.textContent = "";
    // change reset btn text
    resetBtn.textContent = "New Colors";
    // change heading background color
    heading.style.background = "steelblue";
     // change color of squares
    setupSquares(numSquares);
}

function setupSquares(numSquares) {
    for (var i = 0; i < squares.length; i++) {
        if (i < numSquares) {
            // make sure square is visible
            squares[i].style.display = "block";
            // give color to squares
            squares[i].style.backgroundColor = colors[i];
            // add event listeners to squares
            squares[i].addEventListener("click", checkSquare);
        } else {
            squares[i].style.display = "none";
        }
    }
}

function checkSquare() {
    // get color of clicked square
    var color = this.style.backgroundColor;
    // compare color to pickedColor
    if (color === pickedColor) {
        // change message display
        messageDisplay.textContent = "Correct";
        // update reset btn text
        resetBtn.textContent = "Play Again?";
        // change all square colors
        changeColors(pickedColor);
    } else {
        // fade wrong choice into background
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
}

function generateRandomColors(numColors) {
    // random colors array
    var randomColors = new Array(numColors);
    for (var i = 0; i < numColors; i++) {
        // assign random color to array
        randomColors[i] = randomColor();
    }
    // return colors array
    return randomColors;
}

function randomColor() {
    // rgb values
    var r, g, b;
    // red
    r = Math.floor(Math.random() * 256);
    // green
    g = Math.floor(Math.random() * 256);
    // blue
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function selectRandomColor() {
    // select random number
    var r = Math.floor(Math.random() * colors.length);
    // return color in colors array at random number
    return colors[r];
}

function changeColors(color) {
    // change h1 heading backgroundColor
    heading.style.backgroundColor = color;
    // loop through all squares, change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
