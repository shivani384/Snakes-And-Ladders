# Snakes-And-Ladders

the code is written in pure javaScrip and ES6 syntax is used for import/export

#Assumption 
there are 100 cells,at 100 player will won;
the initial position of player is 0(outside the Board).
there are 4 snakes and 4 ladders (values are given).

#input 
provide a position on calling object as a input
eg. 4

#output
it will show the random diceRoll value and the next position of player
eg. DiceRoll :2 (random)
    New Position : 6
    
    
  #for running the project
   command    :npm start
   
 #for running the test cases jest is used .

#dependencies require
  command :
  
  1  npm install –save-dev jest
    (we only want Jest for development purposes)
  2  npm install @babel/core @babel/node –save-dev
    (we want babel to help us in a node.js environment)
  3  npm install @babel/preset-env –save-dev
    (using presets you can target a specific environment for compiling)

  #set the environment preset in .babelrc file

{
    "presets": [
        "@babel/preset-env"
    ]
}

#make file jest.config.json set the values.

#for running the test 
  command : npm test  (
   need to mock the random values so that it gives the desired output :currently working on this)



 
