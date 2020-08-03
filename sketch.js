var box1,box2,box3,box2_img;
//var packageBody;
var ball1,ball1_img

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	box2_img=loadImage("dustbin.png");
	ball1_img=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="red";
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(100,635,50);
	ball1.addImage(ball1_img);
	ball1.shapeColor="grey";
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	box1 = new Box(500,620,10,70);
	box1.shapeColor=(255);
	box2=new Box(600,650,200,10);
	box2.shapeColor="white";
	box2.addImage(box2_img);
    box3=new Box(700,620,10,70)
	box3.shapeColor="white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 box1.display();
 box2.display();
 box3.display();
  ball1.display();
 jump(); 
  drawSprites();
 
}
function jump(){
	if (keyCode===UP_ARROW){
		Matter.Body.setStatic(ball1, false);
		Matter.Body.applyForce(ball1,ball1.position,{x:85,y:-85})
	}
}



