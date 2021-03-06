
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var block1;
var block2;
var block3;
var plane;
var angle=60;
var poly;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var block1_options = {
	restitution: 0.5,
	friction: 0.02,
	frictionAir: 0
	}

	var block2_options = {
	restitution: 0.7,
	friction: 0.01,
	frictionAir: 0.1
	}

	var block3_options = {
	 restitution: 0.1,
	 friction: 1,
	 frictionAir: 0.3
	   }

    var plane_options = {
    isStatic: true
	} 






	plane = Bodies.rectangle(200,390,400,20,plane_options);
	 World.add(world,plane);
   
	 block2 = Bodies.rectangle(220,210,40,20,block2_options);
	 World.add(world,block2);
   
	 block1 = Bodies.circle(110,370,20,block1_options);
	 World.add(world,block1);
   
	 block3 = Bodies.rectangle(350,350,20,20,block3_options);
	 World.add(world,block3);
   


	Engine.run(engine);
  
}


function draw() {
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(block1.position.x,block1.position.y,20)
  rect(block2.position.x,block2.position.y,40,10)
  rect(block3.position.x,block3.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);

}



