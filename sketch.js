
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ballDiameter = 50;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(250,50,400,20);

	ball1 = new Balls(150,400,25);
	ball2 = new Balls(200,400,25);
	ball3 = new Balls(250,400,25);
	ball4 = new Balls(300,400,25);
	ball5 = new Balls(350,400,25);

	rope1 = new Rope(ball1.body, roof.body, -ballDiameter*2, 0);
	rope2 = new Rope(ball2.body, roof.body, -ballDiameter*1, 0);
	rope3 = new Rope(ball3.body, roof.body, ballDiameter*0, 0);
	rope4 = new Rope(ball4.body, roof.body, ballDiameter*1, 0);
	rope5 = new Rope(ball5.body, roof.body, ballDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
	roof.display();
	
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === 32) {
		Matter.Body.applyForce(ball5.body, ball5.body.position, {x: 100, y: -80});
	}

}


