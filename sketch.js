var GS=0;
var pc;
var form,player,game;
var database;
var allPlayers;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
   }

function draw(){
    background("white");
   if(pc===4){
       game.updateGS(1)
   }
   if(GS===1){
       clear();
       game.play();
   }
    drawSprites();
}

