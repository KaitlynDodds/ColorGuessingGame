var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

var colors = randomColors();
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

function randomColors() {
    // 0, 255 to get full color spectrum 
    var min = 0;
    var max = 256;
    // colors array
    var colors = new Array(6);
    // rgb values
    var r, g, b;
    for (var i = 0; i < colors.length; i++) {
        // random numbers for rgb values
        r = Math.floor(Math.random() * (max - min)) + min;
        g = Math.floor(Math.random() * (max - min)) + min;
        b = Math.floor(Math.random() * (max - min)) + min;
        // assign to colors array
        colors[i] = `rgb(${r}, ${g}, ${b})`;
    }
    // return colors array
    return colors;
}

function selectRandomColor() {
    // select random number
    var r = Math.floor(Math.random() * (colors.length - 0)) + 0;
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
