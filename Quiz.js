class Quiz{
    constructor(){}

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState= data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            contestant= new Contestant();
            var contestantCountRef= await database.ref('ContestantCount').once("value")
            if(contestantCountRef.exists()){
                ContestantCount= contestantCountRef.val();
                contestant.getCount();
            }
            question= new Question();
            question.display();
        }
    }

    play(){
        var displayAnswer=230
        Contestant.getContestantInfo();
        if(allContestants!== undefined){
            background("yellow")
             
            for(var plr in allContestants){
    
                var correctAnswer="2";
                if(correctAnswer===allContestants[plr].answer){
                    fill("black")
                 } else{
                    fill("red")
                    }
                   
                    displayAnswer+=30
                    textSize(60)

                    text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,displayAnswer)
            }
            
        }
    }
}