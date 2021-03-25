/***********************************************************************************
  simple example of how to implement navigation with a sprite comprised of png files

------------------------------------------------------------------------------------
  To use:
  Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// uninitialized object
var debugScreen;
var showDebugScreen = false;

var oddBird;
var ghost;

function preload() {
  oddBird = loadAnimation('assets/blueblob-01.png', 'assets/blueblob-05.png');
  ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
}

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  debugScreen = new DebugScreen();

  // create a sprite and animations
  oddBird = createSprite(400, 150);
  ghost = createSprite(600, 300);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = oddBird.addAnimation('floating', 'assets/blueblob-01.png', 'assets/blueblob-05.png');
  var myGhostAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
 }

// Draw code goes here
function draw() {
  background(200, 250, 10);
 
  checkBirdMovement();
  checkGhostMovement();

  //draw the sprite
  drawSprites();
  
  if(showDebugScreen ) {
    debugScreen.draw();
  }
}

function checkBirdMovement() {
  if(keyIsDown(RIGHT_ARROW))
    oddBird.velocity.x = 3;
  else if(keyIsDown(LEFT_ARROW))
    oddBird.velocity.x = -3;
  else
    oddBird.velocity.x = 0;

  if(keyIsDown(DOWN_ARROW))
    oddBird.velocity.y = 3;
  else if(keyIsDown(UP_ARROW))
    oddBird.velocity.y = -3;
  else
    oddBird.velocity.y = 0;
}

function checkGhostMovement() {
  if(keyIsDown(RIGHT_ARROW))
    ghost.velocity.x = 3;
  else if(keyIsDown(LEFT_ARROW))
    ghost.velocity.x = -3;
  else
    ghost.velocity.x = 0;

  if(keyIsDown(DOWN_ARROW))
    ghost.velocity.y = 3;
  else if(keyIsDown(UP_ARROW))
    ghost.velocity.y = -3;
  else
    ghost.velocity.y = 0;

}

function mouseReleased() {
  debugScreen.print("mouseReleased at x: " + mouseX + " y: " + mouseY + " millis = " + millis() );
}
function keyPressed() {
  if( key === ' ') {
    showDebugScreen = !showDebugScreen;
  }
}

