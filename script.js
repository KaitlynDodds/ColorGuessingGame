var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

var colors = generateRandomColors(6);
var pickedColor = selectRandomColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // give color to squares
    squares[i].style.backgroundColor = colors[i];
    // add event listeners to squares
    squares[i].addEventListener("click", function() {
        // get color of clicked square
        var color = this.style.backgroundColor;
        // compare color to pickedColor
        if (color === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
        } else {
            // fade wrong choice into background
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function generateRandomColors(numColors) {
    // random colors array
    var randomColors = new Array(numColors);
    for (var i = 0; i < numColors; i++) {
        // assign random color to array
        randomColors[i] = randomColor();
    }
    // return colors array
    return colors;
}

function randomColor() {
    // rgb values
    var r, g, b;
    // red
    r = Math.floor(Math.random() * 256;
    // green
    g = Math.floor(Math.random() * 256;
    // blue
    b = Math.floor(Math.random() * 256;
    return `rgb(${r}, ${g}, ${b})`;
}

function selectRandomColor() {
    // select random number
    var r = Math.floor(Math.random() * colors.length);
    // return color in colors array at random number
    return colors[r];
}

function changeColors(color) {
    // loop through all squares
    // change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
