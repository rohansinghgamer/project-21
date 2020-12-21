var bullet,wall;
var speed,weight,thickness;
var damage;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,50);
  bullet.velocityX=speed;
  bullet.shapeColor=("blue")
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("yellow");

  
  
  
}

function draw() {
  background("black");
  
 if(hascollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=(0.5 * weight * speed * speed)/(thickness*thickness*thickness);

   if(damage>10){
     wall.shapeColor=("green");
   }
  if(damage<10){
    wall.shapeColor=("red");
  }
  

 }
    //hascollided(bullet,wall);
    drawSprites();

}

function hascollided(lbullet,lwall){
var bulletRightEdge=lbullet.x+lbullet.width;
var wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return  true
}
else{
  return false;
}

}




