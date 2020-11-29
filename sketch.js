
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
if(gameState===2){
  game.end();
}
  
if (ground.x < 0){
  ground.x = ground.width/2;
}   

  
  
 
  
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



