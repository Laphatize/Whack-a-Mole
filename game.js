function setup() {
    createCanvas(500,400);
    mouseClicked();
  };

  var wins = 0;
  var moleX;
  var moleY;

 
        
// Sleep Function 
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  
function draw() {

  /*
      FIRST ROW
      1 = (115,115)
      2 = (215,115)
      3 = (315,115)
      
      SECOND ROW
      4 = (115, 215)
      5 = (215,215)
      6 = (315,215)

      THIRD ROW
      7 = (115, 315)
      8 = (215,315)
      9 = (315,315)

  */




 var possibleX = [115,215,315];
 var possibleY = [115,215,315];

  moleX = random(possibleX);
  moleY = random(possibleY);
 // console.log(possibleX);
//  console.log(possibleY);
 // console.log("-------")


background(255,255,255);

// Title
fill(0,0,0);
textSize(50);
text("Whack - a - mole!", 30, 50);


// Return Home Button


// Create the "holes"

fill(0, 0, 0); // Sets color of "holes"




/* Holes */

rect(200,100,29,29);
rect(100,100,29,29); // First 3
rect(300,100,29,29);

rect(200,200,29,29);
rect(100,200,29,29); // Second 3 
rect(300,200,29,29);

rect(200,300,29,29);
rect(100,300,29,29); // Third 3
rect(300,300,29,29);

textSize(20);
text("Wins:", 100,400)
text(wins, 150,400);

// Creates the Mole
fill(203,203,65);      
ellipse(moleX,moleY,20,20); 
sleep(500)

};
  


function mouseClicked() {


  var distance = int(dist(mouseX, mouseY, moleX, moleY));
  
    if (distance<=50) {
      console.log("mole clicked")
      wins = wins+1;
      console.log(wins)

    }


}
