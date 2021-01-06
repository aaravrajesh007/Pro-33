class Game{
     constructor(){

     }
    getState(){
        var GSref=database.ref('gameState');
        GSref.on("value",function(data){
            GS=data.val();
        })

    }
    updateGS(state){
        database.ref('/').update({
          'gameState':state  
        })
    }
   async start(){
        if(GS===0){
            player=new Player();
            var pcref=await database.ref('playerCount').once("value");
            if(pcref.exists()){
                pc=pcref.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
    play(){
        form.formHide();
        textSize(40);
        text("Game Start",450,200);
        Player.getPlayerinfo();
        if(allPlayers!==undefined){
            var y=240;
            for( var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
            
            textSize(15);
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,150,y)
            }
        }
        
    
    }
}