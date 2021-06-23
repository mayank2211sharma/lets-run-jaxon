var boy ,boy_running  ;
var path ,invisible_path , pathImage ;
var coin ,coinImage ;
var left_boundary , right_boundary ;

function preload(){
  //pre-load images
  boy_running = loadAnimation("runner-1.png","runner-2.png");
  pathImage = loadImage("path.png");
  coinImage = loadImage("coin.png");
}

function setup(){
  createCanvas(600,600);
  //create sprites here
  path = createSprite(300,300);
  path.addImage("path.png",pathImage);
  path.velocityY=5;
  path.y=path.height/30;

  boy = createSprite(185,300)
  boy.addAnimation("running",boy_running);
  boy.scale = 0.1;

   left_boundary=createSprite(70,300,130,600);
   right_boundary=createSprite(550,300,130,600);
   left_boundary.visible=false;
   right_boundary.visible=false;
  
}

function draw() {
  background(200);
  path.velocityY=5;
  if(path.y>400) 
  path.y=height/2 ;

  boy.x=World.mouseX; 

  boy.collide(left_boundary);
  boy.collide(right_boundary);

drawSprites();
}
