// ui variables
var heading = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetBtn = document.getElementById("reset");
var modeBtns = document.getElementsByClassName("mode");

// variable setup
var colors, pickedColor, isHard, hardSquares, easySquares;

function init() {
    // setup mode btn event listeners
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", modeBtnEventListener);
    }

    // default game settings
    isHard = true;
    easySquares = 3;
    hardSquares = 6;

    // start game
    setupGame(hardSquares);
}


/** Event Listeners **/

// add event listener to reset btn
resetBtn.addEventListener("click", function() {
    if (isHard) {
        setupGame(hardSquares);
    } else {
        setupGame(easySquares);
    }
});



/** Game Functions **/

function modeBtnEventListener() {
    // remove from both btns to be safe
    modeBtns[0].classList.toggle("selected");
    modeBtns[1].classList.toggle("selected");
    // add to btn that was just clicked
    this.classList.add("selected");
    // keep track of isHard status
    isHard = !isHard;
    // how many squares to show
    var numSquares = this.textContent === "Easy" ? 3 : 6;
    // launch game setup
    setupGame(numSquares);
}

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

function generateRandomColors(numSquares) {
    // random colors array
    var randomColors = new Array(numSquares);
    for (var i = 0; i < numSquares; i++) {
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
    // select random number from colors array
    var r = Math.floor(Math.random() * colors.length);
    // return color in colors array at random number
    return colors[r];
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
        // change all colors
        changeColors(pickedColor);
    } else {
        // fade wrong choice into background
        this.style.backgroundColor = "#232323";
        // inform user
        messageDisplay.textContent = "Try Again";
    }
}

function changeColors(color) {
    // change h1 heading backgroundColor
    heading.style.backgroundColor = color;
    // loop through all squares, change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
