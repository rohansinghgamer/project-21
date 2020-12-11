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
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  
  
  
}

function draw() {
  background("black");
  
 if(hascollided(lbullet,lwall)){
   bullet.velocityX=0;
   var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

   if(damage>10){
     wall.shapeColor=("green");
   }
  if(damage<10){
    wall.shapeColor=("red");
  }
  

 }
    hascollided(bullet,wall);
    drawSprites();

}

function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEgde=lwall.x;
if(bulletRightEgde>wallLeftEgde){
  return  true
}
else{
  return false;
}

}




