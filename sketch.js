const eng=Matter.Engine;
const wor=Matter.World;
const bod=Matter.Bodies;

var engine,world,paper1b,db,dust,paper1,bar1,bar2,bar3,ground;

function preload()
{
	db=loadImage("db.png");
}

function setup() {
	createCanvas(800, 700);

engine=eng.create();
world=engine.world;
paper1=new pap(200,200,0.5);

/*bar1=new bar(400,570,20,100);
bar2=new bar(470,630,100,20);
bar3=new bar(540,570,20,100);*/

dust=createSprite(470,570);
dust.addImage(db);
dust.scale=0.5;
ground=new bar(400,650,800,20);
}


 function draw() {
  rectMode(CENTER);
  background(0);
  eng.update(engine);


 /* paper1b.x=paper1.x;
  paper1b.y=paper1.y;*/
  paper1.display();
  ground.display();
  drawSprites();
  fill("red")
  
  /*bar1.display();
  bar2.display();
  bar3.display();*/

}

function keyPressed()
{  if(keyCode==UP_ARROW)
{
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35});
}
if(keyCode==DOWN_ARROW)
{
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-85,y:85});
}}

