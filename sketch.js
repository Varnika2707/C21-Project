
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;
var ground;




function setup() {
	createCanvas(1500, 700)

	engine = Engine.create();
    world = engine.world;

    var ball_options ={
		isStatic: false,
		restitution:0.2,
		friction:0,
		density:0.8
	  }
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball)

	  groundObj = new Ground(width/2,670,width,20)
	  World.add(world,groundObj);

	  leftSide = new Ground(1100,600,20,120)
	  World.add(world,leftSide);

	  rightSide = new Ground(1350,600,20,120)
	  World.add(world,rightSide);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)

  groundObj.display();
  leftSide.display()
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:70,y:-50})
	}
}



