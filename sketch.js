
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1
  
ground = createSprite(400, 350, 1200, 10);  
ground.velocityX = -4
ground.x = ground.width/2
console.log(ground.x)

  
}


function draw() {
background("white");
drawSprites()
  if(ground.x < 0){
    ground.x = 200
  }
  monkey.collide(ground)
  if(keyDown("space")){
    monkey.velocityY = -9;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  spawnBanana()
  
}
function spawnBanana(){
  if(frameCount%60===0){
    banana = createSprite(600,200,20,20)
    banana.velocityX = -5;
    banana.addImage(bananaImage)
    banana.scale = 0.1
  }
}






