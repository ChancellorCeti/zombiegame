const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground, leftwall, rightwall,jointpoint;
var bridge1;
var jointLink;
var axeimg,backgroundimg,stoneimg,woodimg,zombieimg;
var zombie1;
var stones=[];
var button;
function preload(){
  axeimg=loadImage("./assets/axe.png");
  backgroundimg=loadImage("./assets/background.png");
  stoneimg=loadImage("./assets/stone.png");
  woodimg=loadImage("./assets/wood.png");
  zombieimg=loadImage("./assets/zombie.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  zombie1=createSprite(650,1118,50,50);
  zombie1.addAnimation("zombiepic",zombieimg);
  zombie1.scale=0.3;
  zombie1.velocityX=10;
  jointpoint = new Base(2000,600,200,900);
  rightwall = new Base(2000,900,200,900);
  leftwall = new Base(200,900,200,900);
  ground = new Base(1000,1300,1200,100);
  bridge1 = new Bridge(35,{x:200,y:500});
  Matter.Composite.add(bridge1.body,jointpoint);
  jointLink = new Link(bridge1,jointpoint);
  button = createImg("./assets/axe.png");
  button.position(1850,450);
  button.size(250,250);
  button.mousePressed(handleButtonPress);
  
  for(var i=0;i<=8;i++){
    var x =random(width/2-200,width/2+300);
    var y=(-10,100);
    Stone = new stone(x,y,80,80);
    stones.push(Stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  rightwall.show();
  leftwall.show();
  ground.show();
  bridge1.show();
  for(var Stone of stones)
  Stone.show();
  drawSprites();
}
function handleButtonPress(){
  jointLink.detach();
  setTimeout(() => {
    bridge1.break();
  },1500);
}