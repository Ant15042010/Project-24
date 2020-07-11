var tRshcan,tRsh, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);





	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0);

	engine = Engine.create();
	world = engine.world;

	
	tRshcan = new TrSHCAN();
	tRsh = new TrSH();

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  tRshcan.display();
  tRsh.display();
  console.log(tRsh.trash.position);
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(tRsh.trash,tRsh.trash.position,{x:400,y:640});
  }
}



