function setup() {
  createCanvas(600, 400);
  background("white")
}

function draw() {
  stroke("black");
  fill("red");
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 5);
  }
}



