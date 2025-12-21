// Conditionals and interactivity

// global variables
let sunHeight;
let horizon = 700 / 2;

// setup function
function setup() {
  createCanvas(700, 700);

  // Console logging in p5
  print('Something sent to the console only.');
}

function draw() {
  // light blue if sun is above horizon
  if (sunHeight < horizon) {
    background('lightblue');
  } else {
    background('navy');
  }

  // sun follows y-coordinate of the mouse
  sunHeight = mouseY;

  // sun
  fill('yellow');
  noStroke();
  circle(700 / 2, sunHeight, 160);

  // line for horizon
  stroke('green');
  line(0, horizon, width, horizon);

  // ground
  fill('green');
  rect(0, 700 / 2, 700, 700 / 2);
}
