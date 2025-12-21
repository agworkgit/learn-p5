// Variables and change
// -> declare, initialise, and update variables
// -> use variables, operators, and random()
// -> add both linear and random motion
// -> frameCount is a built-in variable that saves the number of times draw() runs. This value continues to increase as long as your program is running.

/* Template literals begin and end with backticks (`) instead of quotation marks (""). 
You can include a variable in the string using the ${} placeholder */

// custom variable for x coordinate of clouds
let cloudOneX = 50;

// custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

// setup function
function setup() {
  createCanvas(700, 700);

  // Console logging in p5
  print('Something sent to the console only.');
}

// The draw() function runs code repeatedly and behaves much like a flipbook when animating a series of still drawings.
function draw() {
  // Frame rate speed = 15fps
  frameRate(15);

  background('navy'); // navy bg

  // shooting star
  stroke('yellow');
  line(lineXone, lineYone, lineXone + 60, lineYone + 60);

  // moon
  fill(255);
  stroke(0);
  circle(650, 50, 100);

  // overlapping navy circle for crescent moon
  fill('navy');
  stroke('navy');
  circle(620, 50, 100);

  // big gray mountains
  stroke(0);
  fill(80);
  triangle(-40, 500, 150, 200, 300, 500);
  triangle(200, 500, 500, 100, 800, 500);

  // grass
  fill('rgb(50,76,50)');
  rect(0, 500, 700, 700);

  // cloud
  fill(255);
  ellipse(cloudOneX - 20, 50, 80, 30);
  ellipse(cloudOneX + 40, 100, 100, 40);
  ellipse(cloudOneX, 150, 150, 30);

  // growing tree 1
  // trunk
  fill('rgb(118,80,72)');
  rect(85, 570, 15, 50);
  //leaves
  fill('green');
  triangle(60, 570, 95, 440 - (frameCount % 290), 120, 570);

  // growing tree 2
  // trunk
  fill('rgb(118,80,72)');
  rect(85 + 500, 570, 15, 50);
  //leaves
  fill('green');
  triangle(60 + 500, 570, 95 + 500, 440 - (frameCount % 290), 120 + 500, 570);

  // sets the x coordinate to the frame count
  // resets at left edge
  cloudOneX = frameCount % width;

  // set shooting star random location
  lineXone = random(0, width);
  lineYone = random(0, height / 2);

  /* places the x a y position of the mouse
  on the canvas as a coordinate pair x, y */
  fill(0, 255, 0);
  text(`MouseX: ${mouseX}, MouseY: ${mouseY}`, 20, 20);
  text(`Frame rate (FPS): ${frameRate()}`, 20, 50);
  text(`Frame count: ${frameCount}`, 20, 80);
}

// frameRate(), frameCount and console.log()
// -> The number of times draw() runs is stored in the variable frameCount, and the number of times draw() runs in 1 second is known as the frame rate. By default, the frame rate is set by your computer, which is about 60 for most computers. This indicates that the code appearing in draw() will run about 60 times in a second.
// -> We can set and display the value for draw()’s frame rate using the frameRate() function. We can view the value for the frame rate and frameCount using console.log() to display the values and messages in the console.
