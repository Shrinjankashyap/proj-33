var backgroundImg,snowfaall,man;
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  
 
var snowfaall = [];


function preload(){
backgroundImg=loadImage("snow1.jpg");

}







function setup() {
  createCanvas(800,400);
 var man= createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;



}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  
 
 
  if(frameCount%60===0){
    snowfaal=createSprite(50,20,10);
  }
  
  
  drawSprites();
}