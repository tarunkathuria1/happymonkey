class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        monkey=createSprite(80,315,20,20);
        monkey.addAnimation("moving",monkey_running);
        monkey.scale=0.1;
        
     
      
  
    if(keyDown("space")&& monkey.y >= 100) {
          monkey.velocityY = -12;
      }
      
      //add gravity
      monkey.velocityY = monkey.velocityY + 0.8
    
      monkey.collide(ground);

        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
      var index=0;
      var x=100;
      var y;
      if(allPlayers !== undefined){
        
        for(var plr in allPlayers){
          index=index+1;
          x=x+200;
          y=displayHeight-allPlayers[plr].distance
         
         if(index===player.index){
           camera.position.x=displayWidth/2
           camera.position.y=monkeys[index-1].y
         }
  
        
         // textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }

      if(player.distance>4090){
        gameState=2
      }
      drawSprites();
    }
    end(){
        console.log("gameEnd");
    }
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
  