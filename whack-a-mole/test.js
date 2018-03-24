/*
Made by Pranav Ramesh (Laphatize), using p5.js!
Check out p5.js here: https://p5js.org/ !
*/


function setup() {

  createCanvas(440, 440);
  mouseClicked();
  background(26, 153, 19);
  
};

var text;
var wins = 0;
var moleX;
var moleY;



// Sleep Function 
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// The game
function draw() {

  var possibleX = [115, 215, 315];
  var possibleY = [115, 215, 315];

  moleX = random(possibleX);
  moleY = random(possibleY);

  background(26, 153, 19);

  // Title
  fill(0, 0, 0);
  textSize(50);
  text("Whack - a - mole!", 30, 50);



  fill(99, 70, 12); // Sets color of "holes"

  // Holes
  rect(200, 100, 29, 29);
  rect(100, 100, 29, 29);
  rect(300, 100, 29, 29);
  rect(200, 200, 29, 29);
  rect(100, 200, 29, 29);
  rect(300, 200, 29, 29);
  rect(200, 300, 29, 29);
  rect(100, 300, 29, 29);
  rect(300, 300, 29, 29);


  textSize(20);
  text("Wins:", 100, 400)
  text(wins, 150, 400);

  // Creates the Mole
  fill(203, 203, 65);
  ellipse(moleX, moleY, 20, 20);
  sleep(500)

};

function mouseClicked() {

  var distance = int(dist(mouseX, mouseY, moleX, moleY));

  if (distance <= 50) {
    console.log("mole clicked")
    wins = wins + 1;
    console.log(wins)

  };
};

function plus1() {

    background(26, 153, 19);
    console.log("Function has been called!");
    textSize(40);
    text("+1",100,100);
    sleep(500);
    clear();

};