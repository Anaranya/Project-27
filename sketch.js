const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
var roof1, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(width/2,height/4,width/7,20);
    var bobDiameter = 40;             

    startBobPositionX=width/2; 
    startBobPositionY=height/4+500;
    b1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
    b2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
    b3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
    b4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
    b5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

    r1=new rope(b1.body,roof1.body,-bobDiameter*2, 0);
    r2=new rope(b2.body,roof1.body,-bobDiameter*1, 0);
    r3=new rope(b3.body,roof1.body,0, 0);
    r4=new rope(b4.body,roof1.body,bobDiameter*1, 0);
    r5=new rope(b5.body,roof1.body,bobDiameter*2, 0);


	var render = Render.create({
		element : document.body, 
		engine : engine,
		options : {width : 1200 , height : 700 , wireframes : false}
	})

	Engine.run(engine);
	///////Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(255,0,255);
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof1.display();

  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50, y:-45});
	}
}

function drawLine(constraint) { 
    bobBodyPosition=constraint.bodyA.position;
    roofBodyPosition=constraint.bodyB.position;
    roofBodyOffset=constraint.pointB;
    roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
    roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
    line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
