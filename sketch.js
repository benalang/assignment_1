function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(110, 110, 110);

	// set a fill color
	fill(255, 150, 0);

	// set a stroke color
	stroke(255, 125, 0);
	strokeWeight(3);

	// draw a circle
	ellipse(320, 180, 100, 100);
}
