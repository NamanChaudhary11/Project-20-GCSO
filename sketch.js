var car,wall;
var speed,weight;
var deformation;

function setup() {                                 
  createCanvas(1600,400);
 

  speed=random(55,90);
  weight=random(400,1500);

    car= createSprite(30,200,30,30);
    car.shapeColor=color(0,255,127);
    car.velocityX = speed;

   wall=createSprite(750,200,90,200);
   wall.shapeColor=color(0,0,0);

  
    deformation=0.5*speed*speed*weight/22500;
}
function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  
  
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
    fill("red")
    stroke("orange")
    textSize(30)
    text("ITS DANGEROUS!SAFETY REQUIRED",140,200)
  }

 if(deformation<180 && deformation>100)
 {
 car.shapeColor=color(230,230,0);
 fill("purple")
 stroke("yellow")
 textSize(30)
 text("Its BETTER.less safety is required!",180,200)
 }

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
  fill("orange")
  stroke("red")
  textSize(30)
  text("its best!. no safety is required..",180,200)
}
}


drawSprites();
}