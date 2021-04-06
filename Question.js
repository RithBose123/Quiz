class Question{
    constructor(){
        this.input= createInput("Enter Contestant Name")
        this.input1= createInput("Enter Correct option")
        this.button= createButton("submit")
    }
    hide(){
        this.input.hide();
        this.input1.hide();
        this.button.hide();
    }
    display(){
    
    var question2=createElement('h2')
    question2.html("Question:When Did India get Independence? ")
    question2.position(150,80)

    var option= createElement('h1')
    option.html("1:1946")
    option.position(150,100)

    var option2= createElement('h1')
    option2.html("2: 1948")
    option2.html(150,210)
  
    var option3= createElement('h1')
    option3.html("3:1947")
    option3.position(150,140)

    var option4= createElement('h1')
    option4.html("4:1950")
    option4.position(150,180)

    this.button.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    
     contestant.name= this.input.value();
     ContestantCount+=1
     contestant.index= ContestantCount
     contestant.update();
     contestant.updateCount(ContestantCount)
    })
    }
}