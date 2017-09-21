var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var colors = [
    "rgb(200, 210, 90)",
    "rgb(20, 230, 190)",
    "rgb(230, 30, 90)",
    "rgb(200, 210, 0)",
    "rgb(200, 10, 90)",
    "rgb(0, 20, 90)"
];
var pickedColor = colors[3];
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


function changeColors(color) {
    // loop through all squares
    // change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
