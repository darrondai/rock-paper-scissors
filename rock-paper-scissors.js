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

function getComputerChoice() {
  // INITIALIZE a integer variable named randNum and set its value to 0
  let randNum = 0;
  // CALCULATE a random number between 0 and 1 and set randnum to that value
  randNum = Math.random();
  // MULTIPLY that random number by 3
  randNum *= 3;
  // CALULATE the floor of the product
  randNum = Math.floor(randNum);
  // IF value is 0, RETURN rock
  // ELSE IF value is 1, RETURN paper
  // ELSE (value is 2), RETURN scissors
  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  // INTIALIZE an string variable named humanChoice
  // PROMPT the user for input
  // SET humanChoice to the input string
  // SET humanChoice to lowercase to ignore cases when validating
  let humanChoice = prompt(
    "input your choice of rock/paper/scissors: "
  ).toLowerCase();
  // WHILE humanChoice is not one of rock paper or scisors
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    // PRINT out a message saying "please pick between rock/paper/scissors"
    alert("Invalid Choice, please pick between rock/paper/scissors");
    // ASK for user input and SET humanChoice to user input string
    // SET humanChoice to lowercase to ignore cases when validating
    humanChoice = prompt(
      "input your choice of rock/paper/scissors: "
    ).toLowerCase();
  }
  // RETURN humanChoice
  return humanChoice;
}

function playGame() {
  // score variables
  let humanScore = 0;
  let computerScore = 0;

  // beatBy map to determine win/loss/tie
  let beatBy = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };

  function playRound(humanChoice, computerChoice) {
    // IF humanChoice and computerChoice match, it is a tie, no roundwinner
    if (humanChoice === computerChoice) {
      console.log("It's a tie");
    }
    // IF humanChoice beats computerChoice, human is roundwinner
    else if (humanChoice === beatBy[computerChoice]) {
      // PRINT out a string value representing the roundwinner
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      // INCREMENT the round winner's score variable
      humanScore++;
    }
    // ELSE computer is roundwinner
    else {
      // PRINT out a string value representing the roundwinner
      console.log(`You Lose! ${humanChoice} loses to ${computerChoice}`);
      // INCREMENT the round winner's score variable
      computerScore++;
    }
  }

  // PLAY 5 rounds
  for (let round = 0; round < 5; round++) {
    console.log(`Round ${round + 1}`);
    playRound(getHumanChoice(), getComputerChoice());
  }
}

// Call playGame on webpage open
playGame();
