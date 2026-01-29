function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20, 50, 50);
  // change frame rate
  frameRate(15);

  noStroke();
  ellipse(width / 2, height / 2, 200);

  fill(255);
  // change font size
  textSize(24);
  // display frame rate
  text("FPS: " + frameRate().toFixed(2), 25, 50);
  // console log in p5
  print("console log");
}

/* 
code that will not run,
or multi line comment
*/
