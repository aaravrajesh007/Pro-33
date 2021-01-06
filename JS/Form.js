class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h3');

    }
    formHide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(400,100);

        this.input.position(280,250);

        this.button.position(280,270);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value
            pc+=1
            player.index=pc
            player.update();
            player.updatepc(pc);
            
           this.greeting.html("Hello "+N);
           this.greeting.position(450,200)
        })
    }
}