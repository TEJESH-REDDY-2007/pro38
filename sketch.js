//Create variables here
var gameState = 0;
var dog, hungryDog, happyDog, livingRoom, bedRoom, bathRoom, garden;
var feedme, live, sleep, bath, play;
var foodS, foodStock, database;


function preload(){
  hungryDog = loadImage("Dog.png");
  happyDog = loadImage("happyDog.png");
  livingRoom = loadImage("livingRoom.png");
  bedRoom = loadImage("bedRoom.png");
  bathRoom = loadImage("washRoom.png");
  garden = loadImage("Garden.png")
}

function setup() {
  database = firebase.database();
  console.log(database);

  game = new Game();

	createCanvas(350, 500);

    bg1 = 46;
    bg2 = 139
    bg3 = 87
  dog = createSprite(255, 300)
  dog.addImage(hungryDog)
  dog.scale=0.1

  feedme=createButton("I am Hungry");
  feedme.position(703, 50);
  feedme.mousePressed(feedMe);

  food = database.ref('food');
  food.on("value",readStocks);
  

  play=createButton("I want to play");
  play.position(703, 170);
  play.mousePressed(iplay);

  bath=createButton("I am dirty please take me to bath");
  bath.position(703, 281);
  bath.mousePressed(ibath);

  live=createButton("Take me to living room");
  live.position(703, 411);
  live.mousePressed(livingroom);

  sleep=createButton("I am sleepy i want to dpep");
  sleep.position(703, 533);
  sleep.mousePressed(isleep);

  back0 = createButton("Back to Start")
  back0.position(500, 20)
  back0.mousePressed(its0)
}


function draw() {  
  background(bg1, bg2, bg3);

  if(gameState===1)(
    game.room1()
  )

  if(gameState===2)(
    game.room2()
  )

  if(gameState===3)(
    game.room3()
  )

  if(gameState===4)(
    game.room4()
  )

  drawSprites();

}

function readStocks(data){
  food = data.val();
}

function writeStocks(x){
  database.ref('food').update({
    food:x
  })
}

function feedMe() {
  writeStocks(food);
    dog.addImage(happyDog)
}

function iplay() {
  dog.x=1000
  gameState = 1;
  game.update(1);
}

function ibath() {
  dog.x=1000
  gameState = 2;
  game.update(2);
}

function livingroom() {
  dog.x=1000
  gameState = 3;
  game.update(3);
}

function isleep() {
  dog.x=1000
  gameState = 4;
  game.update(4);
}

function its0() {
  dog.x=255
  gameState = 0
  game.update(0);
  dog.addImage(hungryDog);
}