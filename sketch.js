var car,wall;
var speed,weight
var deformation;

function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1500,200,60,200);
  wall.debug=true;

  car=createSprite(50,200,50,50);
  car.shapeColor='white';
  
  speed=random(55,90);
  weight=random(400,1500);
  deformation= 0.5*weight*speed*speed/22500;
}

function draw() {

    car.velocityX = speed;

    if (car.x - wall.x < wall.width/2 + car.width/2 && wall.x - car.x < wall.width/2 + car.width/2) {

        car.velocityX =0;

        if(deformation>180)
        {
            car.shapeColor='red';
        }
        if(deformation<180 && deformation>100)
        {
            car.shapeColor='yellow';
        }
        if(deformation<100)
        {
            car.shapeColor='green';
        }
    } 


    background(0); 
    drawSprites();

    text("Speed: "+ speed,18,50,fill("white"));
    text("weight: "+ weight,18,35,fill("white"));
    text("deformation: "+ deformation,18,20,fill("white"));

}