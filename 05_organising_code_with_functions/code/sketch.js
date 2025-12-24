// Organising Code with Functions

// -> setup() runs once at the beginning of the program.
// -> Similarly, draw() is another function built into the p5.js library that is declared in every sketch.
// -> When draw() is called, it runs the code block in its body repeatedly. It runs over and over again until your program stops.
// !! Custom functions are defined outside of setup() and draw(), usually at the bottom of your code.

//variables for color change
let redVal = 0;
let greenVal = 0;

//variable for sun position
let sunHeight = 600; //stopping point below horizon

function setup() {
  createCanvas(600, 400);
  //textSize(20);
  noStroke();
}

function draw() {
  // Calling the custom functions below
  sky();
  sun();
  mountains();
  tree(150, 320, 10); // x, y, size
  tree(210, 320, 10);
  variableUpdate();
}

// Custom functions

function sky() {
  //fill background with color based on custom variable values
  background(redVal, greenVal, 0);
}

function sun() {
  //sun
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);
}

function mountains() {
  //mountains
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);
}

function tree(x, y, size) {
  // tree
  fill(80, 30, 20);
  rect(x - size, y, size * 2, size * 6);
  fill(20, 130, 5);
  triangle(x - size * 3, y, x, y - size * 8, x + size * 3, y);
}

function variableUpdate() {
  // reduce sunHeight by 2 until it reaches 140
  if (sunHeight > 130) {
    sunHeight -= 2;

    // modify custom variables for sky color during sunrise

    if (sunHeight < 480) {
      redVal += 4;
      greenVal += 1;
    }
  }

  if (mouseIsPressed === true && sunHeight === 130) {
    background(0);
  }
}
