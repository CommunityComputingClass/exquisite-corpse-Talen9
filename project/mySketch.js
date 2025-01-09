function setup() {
  createCanvas(400, 400);
  background(220);

  fill(255); // White color for the eyes
  stroke(0); // Black outline
  ellipse(100, 100, 65, 50); // Left eye
  ellipse(200, 100, 65, 50); // Right eye

  fill(0); // Black color for pupils
  ellipse(100, 100, 20, 20); // Left pupil
  ellipse(200, 100, 20, 20); // Right pupil

  fill(255); 
  ellipse(101, 95, 5, 5);
  ellipse(201, 95, 5, 5);

}

