// Get Started

function setup() {
  // creates a canvas 600px wide and 400 px high
  createCanvas(600, 400);
}

// 60 times per second until the program is stopped or the noLoop() function is called
// code inside draw() will be rendered in layers, code that appears first will be drawn first
function draw() {
  // rgb
  background(105, 200, 255);

  // x, y, rad in px
  fill('yellow'); // yellow, HTML color names
  stroke('orange'); // orange outline
  strokeWeight(20); // large outline
  circle(550, 50, 100);

  fill('green');
  noStroke(); // disable outline
  rect(0, 200, 600, 200);

  textAlign(CENTER); // aligns text
  fill('black');
  textSize(24); // adjust text size in px
  text('moving text', mouseX, mouseY); // render text strings and position them on x/y axis

  // mouseX and mouseY store the x and y-coordinates of the mouse pointer as it is dragged over the canvas.
  // You can use mouseX and mouseY as any argument that requires a number!
}
