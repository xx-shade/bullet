var wall, thickness, bullet, speed, weight, damage


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = rgb (80,80,80)
  
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(100,200,20,20)
  bullet.velocityX = speed
  
}

function draw() {
  background(0);  
  bullet.collide(wall)
  damage = (weight*speed*speed)/(thickness*thickness*thickness)
  console.log(damage)
  if(damage < 10){
    bullet.shapeColor = "red"
  }
  if(damage > 10){
    bullet.shapeColor = "green"
  }
  

  drawSprites();
}