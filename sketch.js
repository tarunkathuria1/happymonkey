
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);  
  
 
}


function draw() {
background("white");
  
if(playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    

  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);

  
  
  food();
  obstacle();
  
drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time; "+survivalTime,100,50);
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,50,40,10);
    banana.y = Math.round(random(120,200));
 banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
  }
}

function obstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,320,40,10);
    
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
  }
}

