
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeImage;
var ground,slingshot
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8




function preload(){
treeImage = loadImage("tree.png")
boyImage = loadImage("boy.png")	
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  		ground = new Ground(width/2,height - 10, width, 20)
        stone = new Stone(60,650)
        slingshot = new SlingShot(stone.body, {x:90, y:650})
        mango1 = new Mango(550,420)
		mango2 = new Mango(550,500)
		mango3 = new Mango(650,420)
		mango4 = new Mango(650,500)
		mango5 = new Mango(650,350)
		mango6 = new Mango(750,420)
		mango7 = new Mango(750,480)
		mango8 = new Mango(698,300)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(treeImage,500,250,300,600)
  image(boyImage,75,600,100,200)
  ground.display();
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  detectcollision(stone,mango6)
  detectcollision(stone,mango7)
  detectcollision(stone,mango8)

  textSize(30)
  text("Press R to Restart",100,200)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 82){
        slingshot.attach(stone.body)
    }
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=Lmango.width/2+Lstone.width/2)
{
 Matter.Body.setStatic(Lmango.body,false);
  }
}
