function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw (){
face(mouseX,mouseY);

}
function face(x,y){
  fill ("green")
  ellipse (x+50,y+30, 300, 300)
  
  fill(255); // White color for the eyes
  stroke(0); // Black outline
  ellipse(x, y, 65, 50); // Left eye
  ellipse(x+100, y, 65, 50); // Right eye

  fill(0); // Black color for pupils
  ellipse(x, y, 20, 20); // Left pupil
  ellipse(x+100, y, 20, 20); // Right pupil

  fill(255); 
  ellipse(x+1, y-5, 5, 5);
  ellipse(x+101, y-5, 5, 5);


}


