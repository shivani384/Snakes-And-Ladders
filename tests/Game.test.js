import { expect } from "@jest/globals";
import Game from "../Game.mjs";

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

test("expected values when a random diceRoll value comes ",()=>{
    expect(Game(3)).toEqual(9);  //getting the ladder case if Dice value comes
                                 //  to be 4
    expect(Game(34)).toEqual(85) // if the dice rolls comes out to be 3 then we are
                                 // getting the ladder 
    expect(Game(60)).toEqual(35)  // at 60 position get diceRolls value 5 then snake get us to the
                                  // value  
     expect(Game(96)).toEqual(100)  // if at 96 diceRolls comeout to be 4 then the 
                                      //then the player Won                                                       
})