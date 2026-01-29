function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20);

  noStroke();
  text("This coord point is at x: 300, y: 300", 325, 275);
  ellipse(300, 300, 25);
  fill(255);
  stroke(255);
  line(50, 50, 200, 200);
}

// For display coordinates:
// - They start in the top-left corner (0,0 the origin)
