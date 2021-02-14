var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor=(80, 80, 80);
  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if(car.collide(wall)){
    deformation=Math.round((0.5*weight*speed*speed)/22500);
    console.log(deformation)
  }

  if(deformation>180){
    car.shapeColor=("#91091e")
  }else if(deformation<100){
    car.shapeColor=("#62959c")
  }else if(deformation>100 && deformation<180){
    car.shapeColor=("#f5d782")
  }

  drawSprites();
}