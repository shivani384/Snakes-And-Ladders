import {SnakeHeadArray,SnakeTailArray,LadderFootArray,LadderTopArray,
        TotalCells,noOfSnakes,noOfLadders} from "./components/board.mjs";
import Snakes from "./components/Snakes.mjs"; 
import Ladder from "./components/Ladder.mjs";       


export default class Game{

    constructor(startPosition,RollingDice)
    {
        
        this.currentPosition=startPosition;
        this.nextPosition=0;
        this.SnakesOnBoard=[];
        this.LaddersOnBoard=[];
        this.setBoard();
       // this.diceRollValue=this.DiceRoll();  
       this.diceRollValue=RollingDice
    }

    getCurrentPosition(){
        console.log("Current Position :",this.currentPosition);
    }
     LoadSnakes(){
         for(let snake=0;snake<noOfSnakes;snake++){
             this.SnakesOnBoard.push(
                 Snakes(SnakeHeadArray[snake],SnakeTailArray[snake]) );
         }
     }
    
     LoadLadders(){
        for(let ladder=0;ladder<noOfLadders;ladder++){
            this.LaddersOnBoard.push(Ladder(
                 LadderFootArray[ladder],LadderTopArray[ladder]) );
                
        }
    }
    DiceRoll(){
    
     return  Math.floor(Math.random()*6+1)
             
          
    }

     CheckforSnakes(cell){
   let  isSnakeFound= this.SnakesOnBoard.filter(snake=>
          snake.head==cell)
        if(isSnakeFound)
        return isSnakeFound[0];
        else 
        return null;
        }
    
          
           

     
    
     CheckforLadder(cell){
let isLadderFound=this.LaddersOnBoard.filter(ladder=>
    ladder.foot==cell)
  
              
    if( isLadderFound)
    return isLadderFound[0];
    else
    return null;
}
   


     

     setBoard(){
         this.getCurrentPosition();
         this.LoadSnakes();
         this.LoadLadders();
     }

   Play()
   {
         
         console.log("Dice Outcome :",this.diceRollValue);
         if(this.diceRollValue+this.currentPosition==100){
            
            this.nextPosition=this.currentPosition+this.diceRollValue;
            console.log("You Win",this.nextPosition);  
            return this.nextPosition;
            } 
            
        else if(this.diceRollValue<=TotalCells-this.currentPosition) {
           
            this.nextPosition=this.currentPosition+this.diceRollValue;
          
            if(this.CheckforSnakes(this.nextPosition)){
           this.nextPosition=this.CheckforSnakes(this.nextPosition).tail;

        
            }
           if(this.CheckforLadder(this.nextPosition)){
        
           this.nextPosition=this.CheckforLadder(this.nextPosition).top;
           
           }
           console.log("New Position ",this.nextPosition);  
           return this.nextPosition;
        }
        
        else{
            console.log("you just need ",TotalCells-this.currentPosition);
            return this.nextPosition;
        }
   }


};
//let curPosition=prompt("enter the currentPosition of player");
const snakeNladder1=new Game(3,4);
snakeNladder1.Play();
/*
const snakesNladder2=new Game(4,5);
snakesNladder2.Play(); 
const snakesNladder3=new Game(96,4);
snakesNladder3.Play();
const snakesNladder4=new Game(96,5);
snakesNladder4.Play();
const snakesNladder5=new Game(60,5);
snakesNladder5.Play();*/