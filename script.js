var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var colors = [
    "rgb(200, 210, 90)",
    "rgb(20, 230, 190)",
    "rgb(230, 30, 90)",
    "rgb(200, 210, 0)",
    "rgb(200, 10, 90)",
    "rgb(0, 20, 90)"
];
var pickedColor = colors[3];

for (var i = 0; i < squares.length; i++) {
    // give color to squares
    squares[i].style.backgroundColor = colors[i];
    // add event listeners to squares
    squares[i].addEventListener("click", function() {
        // get color of clicked square
        var color = this.style.backgroundColor;
        // compare color to pickedColor
        if (color === pickedColor) {
            alert("Right!");
        } else {
            alert(pickedColor + " " + color);
        }
    });
}

colorDisplay.textContent = pickedColor;
