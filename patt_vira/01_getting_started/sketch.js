let x = 300;
let y = 300;
let obj_size = 400;
let x_speed = 5;
let y_speed = 5.5;
let x_direction = 1;
let y_direction = 1;
let rotation = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  // x = x + x_speed * x_direction;
  // y = y + y_speed * y_direction;

  // if (x > width - obj_size / 2 || x < obj_size / 2) {
  //   x_direction *= -1;
  // }

  // if (y > height - obj_size / 2 || y < obj_size / 2) {
  //   y_direction *= -1;
  // }

  // noStroke();

  rotation += random(0, 1);

  stroke(0);
  fill(0, 0, 0, 0);
  translate(width / 2, height / 2);
  rotate(rotation);
  rectMode(CENTER);
  rect(0, 0, obj_size, obj_size);
  line(0, random(0, 100), 10, 100);

  // if (x > 570 || x < 30 || y > 570 || y < 30) {
  //   ellipse(x, y, obj_size - 5, obj_size - 5);
  // } else {
  //   ellipse(x, y, obj_size, obj_size);
  // }
}

// Recap
// - rect
// - ellipse
// - line
// - stroke
// - fill
// - map
// - random
// - rotate
// - rectMode
// - translate
// - mouseX, mouseY
