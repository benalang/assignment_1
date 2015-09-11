function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(255, 255, 255);

	// draw a blue rectangle (ocean) with no stroke
	fill(90, 155, 175);
  noStroke();
	rect(0, 240, 640, 140);

	// draw a series of elipses (waves)
	fill(255, 255, 255);
  noStroke();
	ellipse(40, 205, 120, 120);
	ellipse(140, 205, 120, 120);
	ellipse(240, 205, 120, 120);
	ellipse(340, 205, 120, 120);
	ellipse(440, 205, 120, 120);
	ellipse(540, 205, 120, 120);
	ellipse(640, 205, 120, 120);

	// draw a triangle (jib)
	fill(225, 225, 225);
	stroke(0.5);
  triangle(411, 51, 411, 171, 341, 170);

	// draw a triangle (main sail)
	fill(255, 51, 0);
	noStroke();
  triangle(418, 50, 418, 180, 518, 180);

  // draw a rect (mast)
	fill(117, 72, 38);
	noStroke();
	rect(412, 50, 5, 150);

	// draw a quad (boat hull)
	fill(117, 72, 38);
	noStroke();
	quad(325, 280, 525, 275, 525, 210, 305, 190);
}
