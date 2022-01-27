// Challange#2 to add random number between 0-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Challage#4 to add random images to appear
var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Challage#5 add random image to 2nd picture
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Challage#6 change h1 text to who won.

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else {
  document.querySelector("h1").innerHTML = "Draw"
}
