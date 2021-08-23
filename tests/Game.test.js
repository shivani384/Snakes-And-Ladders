import { expect, jest } from "@jest/globals";
import Game from "../Game.mjs";
import ClassCalling from "../ClassCalling"

//const expect=require("@jest/globals");
//const Game=require("../Game.mjs");

/*const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;*/

jest.mock("../Game.mjs");

test("expected results when Game class is called  ",()=>{
   // expect(Game).not.toHaveBeenCalled()
   
    // Clear all instances and calls to constructor and all methods:
    Game.mockClear();
    ClassCalling();
    expect(Game.mock.instances[0].Play.mock.calls.length).toBe(1);
    expect(Game.mock.instances[0].Play.mock.results[0].value).toBeTruthy();
     
    expect(Game.mock.calls.length).toBe(1);  // SUCCESS
    //expect(Game.mock.calls[0][0]).toBeCalledWith(3,4);  // SUCCESS

//expect(Game).toHaveBeenCalledTimes(1);
//expect(g).toEqual(33);

/*const mockGameInstance = Game.mock.instances[0];
  const mockPlay = mockGameInstance.Play;
  expect(mockPlay.mock.calls[0][0]).toEqual(33);
//expect(game1.Play()).toBe(33);*/
  /*  expect(Game(3,4)).Play().toEqual(9);  //getting the ladder case if Dice value comes
                                 //  to be 4
    expect(Game(34,3)).Play().toEqual(85) // if the dice rolls comes out to be 3 then we are
                                 // getting the ladder 
    expect(Game(60,5)).Play().toEqual(35)  // at 60 position get diceRolls value 5 then snake get us to the
                                  // value  
    expect(Game(96,4)).Play().toEqual(100)  // if at 96 diceRolls comeout to be 4 then the 
                                      //then the player Won                                                       

*/                                    });