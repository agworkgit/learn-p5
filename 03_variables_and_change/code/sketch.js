// Variables and change
// -> declare, initialise, and update variables
// -> use variables, operators, and random()
// -> add both linear and random motion

/* Template literals begin and end with backticks (`) instead of quotation marks (""). 
You can include a variable in the string using the ${} placeholder */

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //Place code here

  /* places the x a y position of the mouse
  on the canvas as a coordinate pair x, y */
  fill(0);
  text(`${mouseX}, ${mouseY}`, 20, 20);
}
