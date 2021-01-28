var rect1,rect2;

function setup() {
  createCanvas(1000,1000);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "green";
  rect1.debug=true;

  rect2 = createSprite(600,300,80,60);
  rect2.shapeColor = "green";
  rect2.debug=true;
}


function draw() {
  background(255,255,255);  

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  } else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  
  drawSprites();
}