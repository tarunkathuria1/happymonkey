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
        monkey1=createSprite(100,200)
        monkey2=createSprite(300,200)
        monkey3=createSprite(500,200)
        monkey4=createSprite(700,200)
        monkeys=[monkey1,monkey2,monkey3,monkey4]
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
          monkeys[index-1].x=x
          monkeys[index-1].y=y
         if(index===player.index){
           monkeys[index-1].shapeColor="red";
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
      drawSprites();
    }
  }
  