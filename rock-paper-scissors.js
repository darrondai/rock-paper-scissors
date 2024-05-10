// understand
// the goal of the project is to build a game that is played entirely in the console,
// The players will have 3 possible choices: rock, paper, or scissors
// Users will input their actions through text prompts and commands?
// The computer choice will be randomly decided
// The game will decide the winner by comparing the user choice vs computer choice
// rock beats scissors, loses to paper
// paper beats rock, loses to scissors
// scissors beats paper, loses to rock

// planning
// the program will not have a user interface, just the browser console
// the inputs will be the user choice, which will be taken in through console commands
// desired output is a string that says who wins

// pseudocode
// INITIALIZE a empty string variable named playerInput
// SET playerInput to a value inputted through the console
// INITIALIZE a empty string variable named computerChoice
// SET computerChoice to a value that is randomly calculated
// CHECK who wins
// DISPLAY the winner

// PSEUDOCODE
// CALCULATE a random number between 0 and 1
// MULTIPLY that random number by 3
// CALULATE the floor of the product
// IF value is 0, set computerChoice to rock
// ELSE IF value is 1, set computerChoice to paper
// ELSE (value is 2), set computerChoice to scissors
function getComputerChoice() {}
