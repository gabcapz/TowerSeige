const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2, ground;

function preload(){
    polygon_image = loadImage("polygon.png");
}

function setup(){
var canvas = createCanvas(1200, 600);

engine = Engine.create();
world = engine.world;

stand1 = new Ground(492.5, 450, 280, 10);
stand2 = new Ground(950, 250, 240, 10);
ground = new Ground(600, 590, 1200, 20);

//first shelf
block1 = new Block(400, 448, 30, 40);
block2 = new Block(430, 448, 30, 40);
block3 = new Block(460, 448, 30, 40);
block4 = new Block(490, 448, 30, 40);
block5 = new Block(520, 448, 30, 40);
block6 = new Block(550, 448, 30, 40);
block7 = new Block(580, 448, 30, 40);

block8 = new Block(430, 350, 30, 40);
block9 = new Block(460, 350, 30, 40);
block10 = new Block(490, 350, 30, 40);
block11 = new Block(520, 350, 30, 40);
block12 = new Block(550, 350, 30, 40);

block13 = new Block(460, 300, 30, 40);
block14 = new Block(490, 300, 30, 40);
block15 = new Block(520, 300, 30, 40);

block16 = new Block(490, 250, 30, 40);

//second shelf
block17 = new Block(885, 248, 30, 40);
block18 = new Block(915, 248, 30, 40);
block19 = new Block(945, 248, 30, 40);
block20 = new Block(975, 248, 30, 40);
block21 = new Block(1005, 248, 30, 40);

block22 = new Block(915, 170, 30, 40);
block23 = new Block(945, 170, 30, 40);
block24 = new Block(975, 170, 30, 40);

block25 = new Block(945, 110, 30, 40);

player = new Polygon(50,200,30,30);

polygon = Bodies.circle(50, 200, 20);
World.add(world, polygon);

slingShot = new Slingshot(this.polygon,{x:150, y:160});

}

function draw(){
    background(50);
    Engine.update(engine);
    
    stand1.display();
    stand2.display();
    ground.display();

    fill("skyBlue");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("purple");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightPink");
    block13.display();
    block14.display();
    block15.display();
    fill(rgb(77, 78, 48));

    block16.display();

    //second shelf
    fill("skyBlue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill(rgb(255, 50, 10))

    block22.display();
    block23.display();
    block24.display();
    fill("lightGreen")

    block25.display();

    imageMode(CENTER);
    image(polygon_image, polygon.position.x, polygon.position.y, 40, 40);

    slingShot.display();

    stroke("blue");
    textSize(24);
    text("Drag the Hexagonal stone and release it, to launch it towards the blocks!", 200, 50);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
   
   function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.setPosition(player.body,{x:150, y:160})
		slingShot.attach(player.body);
	}
}