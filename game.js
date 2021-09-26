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

  room1(){
    image(garden,0 , 0, 350, 500);
    console.log(1);
  }

  room2(){
  image(bathRoom,0 , 0, 350, 500);
  console.log(1);
  }

  room3(){
  image(livingRoom,0 , 0, 350, 500);
  console.log(1);
  }
  
  room4(){
  image(bedRoom,0 , 0, 350, 500);
  console.log(1);
  }
}