var bgColor = ["#23f0c7", "#ef767a", "#7d7abc", "#6457a6", "ffe347"];
var button = document.getElementById("button");

function changeColor() {
    var number = Math.floor(Math.random() * 5);
    document.body.style.backgroundColor = bgColor[number];
    console.log(number);
}

button.addEventListener("click", changeColor);