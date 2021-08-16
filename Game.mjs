import {SnakeHeadArray,SnakeTailArray,LadderFootArray,LadderTopArray,
        TotalCells,noOfSnakes,noOfLadders} from "./components/board.mjs";
import Snakes from "./components/Snakes.mjs"; 
import Ladder from "./components/Ladder.mjs";       


class Game{

    constructor(startPosition)
    {
        
        this.currentPosition=startPosition;
        this.nextPosition=0;
        this.SnakesOnBoard=[];
        this.LaddersOnBoard=[];
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
        this.setBoard();
         let diceRollValue=this.DiceRoll();  
         console.log("Dice Outcome :",diceRollValue);
         if(diceRollValue+this.currentPosition==100){
            
            this.nextPosition=this.currentPosition+diceRollValue;
            console.log("You Win",this.nextPosition);  
            } 
            
        else if(diceRollValue<=TotalCells-this.currentPosition) {
           
            this.nextPosition=this.currentPosition+diceRollValue;
          
            if(this.CheckforSnakes(this.nextPosition)){
           this.nextPosition=this.CheckforSnakes(this.nextPosition).tail;
        
            }
           if(this.CheckforLadder(this.nextPosition)){
        
           this.nextPosition=this.CheckforLadder(this.nextPosition).top;
           
           }
           console.log("New Position ",this.nextPosition);  
        }
        
        else{
            console.log("you just need ",TotalCells-this.currentPosition);
        }
   }


};
//let curPosition=prompt("enter the currentPosition of player");
const board=new Game(4);
board.Play();