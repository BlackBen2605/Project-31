const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var division = [];



var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);
  ground1.shapeColor="red"


   for (var k = 0; k <=width; k = k + 80) {
     fill("blue")
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  fill("black")
  textSize(20)
 //text("Score : "+score,240,50);
 
  Engine.update(engine);
 
  ground1.display();
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%90===0){
     particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  for (var k = 0; k < division.length; k++) {
     
   division[k].display();
   }
}
