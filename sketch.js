const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var myengine,myworld;
var ground;
var ball;
var box1 , box2 


function setup() {
  createCanvas(1200,400); 

  myengine= Engine.create();
  myworld=myengine.world;

ground= new Ground (600,400,1200,20) 

/*var balloptions={
  restitution: 1 


}

ball=Bodies.circle(100,100,20,balloptions)
World . add(myworld,ball)
console.log(object);*/
box1= new Box(700,320,70,70);
box2= new Box(920,320,70,70)
pig1= new Pig (810,350) 
log1= new Log (810,260,300,PI/2) 
 
box3= new Box(700,240,70,70);
box4= new Box(920,240,70,70)
pig2= new Pig (810,220) 
log2= new Log (810,180,300,PI/2)
box5= new Box (810,160,70,70)
log3= new Log (760,120,120,PI/8) 
log4= new Log (870,120,120,PI/-8) 
bird= new Bird (100,100)
}

function draw() {
  background(0);  
  Engine.update (myengine);
  rectMode (CENTER);

//rect(object .position .x,object .position .y,400,50)
/*ellipseMode(RADIUS) 

ellipse (ball.position.x,ball.position.y,20,20)*/
box1.display();
box2.display();
ground.display();
pig1.display();
log1.display(); 
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display(); 
}  