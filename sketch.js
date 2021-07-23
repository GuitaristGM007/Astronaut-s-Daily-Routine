//declare necessary variables for sprites, images, sounds, groups, etc.
var astronaut, astronautImage;
var bg, bgImage;
var sleepImage;
var gymImage1, gymImage2;
var brushImage;
var bathingImage;
var eatingImage;
var moveImage;
var invisibleWall1, invisibleWall2, invisibleWall3, invisibleWall4;

//function to preload the images for sprites
function preload(){
//load the image for astronaut
astronautImage = loadImage("sleep.png");
//load the image for bg
bgImage = loadImage("iss.png");
//load the image for sleeping
sleepImage = loadImage("sleep.png");
//load the animation for gym exercise - 1
gymImage1 = loadAnimation("gym1.png", "gym2.png");
//load the animation for gym exercise - 2
gymImage2 = loadAnimation("gym11.png", "gym12.png");
//load the image for brushing
brushImage = loadImage("brush.png");
//load the animation for bathing
bathingImage = loadAnimation("bath1.png", "bath2.png");
//load the animation for eating
eatingImage = loadAnimation("eat1.png", "eat2.png");
//load the animation for moving
moveImage = loadAnimation("move.png", "move1.png");
}

//function to setup the game
function setup(){
//create the canvas of required size
createCanvas(800, 400);
  
//create a sprite for bg along with some properties
bg = createSprite(400, 200, 800, 400);
bg.addImage("base", bgImage);
bg.scale = 0.2;
  
//create a sprite for astronaut
astronaut = createSprite(300, 230, 75, 140);
astronaut.addAnimation("resting", sleepImage);
astronaut.scale = 0.1;
  
//create invisibleWall1
invisibleWall1 = createSprite(400, 0, 800, 2);
invisibleWall1.visible = false;
//create invisibleWall2
invisibleWall2 = createSprite(400, 400, 800, 2);
invisibleWall2.visible = false;
//create invisibleWall3
invisibleWall3 = createSprite(0, 200, 2, 400);
invisibleWall3.visible = false;
//create invisibleWall4
invisibleWall4 = createSprite(800, 200, 2, 400);
invisibleWall4.visible = false;
}

//function to draw the objects in game
function draw(){
//create the background of suitable color
background(0);
  
//give the condition to change the animation of astronaut to exercise 1
if (keyDown("A")){
//change the actual animation
astronaut.addAnimation("exercise1", gymImage1);
astronaut.changeAnimation("exercise1", gymImage1);
//change the velocity of astronaut
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
  
//give the condition to change the animation of astronaut to exercise 2
if (keyDown("B")){
//change the actual animation
astronaut.addAnimation("exercise2", gymImage2);
astronaut.changeAnimation("exercise2", gymImage2);
//change the velocity of astronaut
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
  
//give the condition to change the animation of astronaut to brushing
if (keyDown("C")){
//change the actual animation
astronaut.addAnimation("cleanTeeth", brushImage);
astronaut.changeAnimation("cleanTeeth", brushImage);
//change the velocity of astronaut
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
  
//give the condition to change the animation of astronaut to bathing
if (keyDown("D")){
//change the actual animation
astronaut.addAnimation("shower", bathingImage);
astronaut.changeAnimation("shower", bathingImage);
//change the velocity of astronaut
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
  
//give the condition to change the animation of astronaut to eating
if (keyDown("E")){
//change the actual animation
astronaut.addAnimation("food", eatingImage);
astronaut.changeAnimation("food", eatingImage);
//change the velocity of astronaut
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
  
//give the condition to change the animation of astronaut to moving
if (keyDown("F")){
//change the actual animation
astronaut.addAnimation("moving", moveImage);
astronaut.changeAnimation("moving", moveImage);
//change the velocity of astronaut
astronaut.velocityX = 2;
astronaut.velocityY = -1.25;
}
  
//make the astronaut bounce off from the walls
astronaut.bounceOff(invisibleWall1);
astronaut.bounceOff(invisibleWall2);
astronaut.bounceOff(invisibleWall3);
astronaut.bounceOff(invisibleWall4);
  
//give the command to draw the sprites
drawSprites();
//display text
fill("white");
textSize(20);
text("Instructions :", 20, 25);
text("1.'A' = Treadmill", 20, 45);
text("2.'B' = Muscle - Building", 20, 65);
text("3.'C' = Brushing", 20, 85);
text("4.'D' = Bathing", 20, 105);
text("5.'E' = Eating", 20, 355);
text("6.'F' = Moving In Gravity", 20, 375);
}