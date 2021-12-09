var wondergirl;
var earth,bg;

function preload(){
wondergirlImg = loadImage("assets/standW.png");
wondergirlShooting = loadAnimation("assets/shoot 1.png","assets/shoot 2.png","assets/shoot 3.png")
bgImg = loadImage("assets/bg.jpg");

}

function setup() {
  createCanvas(1366,643);
 
  bg = createSprite(683,321,20,20);
  bg.addImage("bg",bgImg);
  bg.scale = 2.5

  wondergirl = createSprite(200,380,20,20);
  wondergirl.addImage("stand",wondergirlImg);
  wondergirl.scale = .40;

  invisibleTop = createSprite(700,5,1366,10);
  invisibleBottom = createSprite(700,638,1366,10);
  invisibleTop.visible = false;
  invisibleBottom.visible = false;

  alienGroup = new Group();
}

function draw() {
  background(225,225,225);  
  
  if(keyDown("UP_ARROW")){
    wondergirl.y = wondergirl.y-30
  }
  if(keyDown("DOWN_ARROW")){
   wondergirl.y =wondergirl.y+30
  }
 
wondergirl.collide(invisibleTop);
wondergirl.collide(invisibleBottom);

if(keyWentDown("space")){
  wondergirl.addAnimation(wondergirlShooting)
}
else if(keyWentUp("space")){
  wondergirl.addAnimation(wondergirlShooting)
}

  drawSprites();
}