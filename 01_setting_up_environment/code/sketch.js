function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  /* // put drawing code here
  background('aqua');

  // circle in the centre with a width of 100
  circle(200, 200, 100); */

  // when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

  // white circles drawn at mouse position
  circle(mouseX, mouseY, 100);
}
