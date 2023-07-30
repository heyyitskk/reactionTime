function getRandomColor() {
// Generate random values for RGB channels
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

// Construct the CSS color string
var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

return color;
}

var start = new Date().getTime();
function move(){
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var wh = (Math.random() * 400) + 100;
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.height = wh + "px";
    document.getElementById("shape").style.width = wh + "px";
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.background = getRandomColor();
    start = new Date().getTime();
}

move();
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
    alert(timeTaken);
    move();
}