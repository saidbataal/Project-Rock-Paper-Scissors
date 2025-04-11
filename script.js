'use strict';
function getComputerChoice() {
  let result = Math.floor(Math.random() * 3)
  if (result === 0) { return "rock" }
  else if (result === 1) { return "paper" }
  else { return "scissors" }
}

function getHumanChoice() {
  let result = prompt("Choose rock, paper, or scissors:");


  return result.toLowerCase();
}





const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

  if (humanChoice === "rock" && computerChoice === "scissors") {humanScore++ ; return "You win! Rock beats scissors."; }
  else if (humanChoice === "rock" && computerChoice === "rock") { return "It's a tie! You both chose the same."; }
  else if (humanChoice === "rock" && computerChoice === "paper") {computerScore++ ; return "You lose! Paper beats Rock."; }

  else if (humanChoice === "paper" && computerChoice === "scissors") {computerScore++ ; return "You lose! scissors beats paper."; }
  else if (humanChoice === "paper" && computerChoice === "paper") { return "It's a tie! You both chose the same.";}
  else if (humanChoice === "paper" && computerChoice === "rock") {humanScore++ ; return "You win! Paper beats Rock."; }

  else if (humanChoice === "scissors" && computerChoice === "rock") {computerScore++ ; return "You lose! rock beats scissors."; }
  else if (humanChoice === "scissors" && computerChoice === "scissors") { return "It's a tie! You both chose the same."; }
  else if (humanChoice === "scissors" && computerChoice === "paper") {humanScore++ ; return "You win! scissors beats paper."; }




}

let humanScore  = 0;
let computerScore = 0;

console.log(`humanChoice : ${humanSelection}`);
console.log(`computerChoice : ${computerSelection}`);

console.log(playRound(humanSelection, computerSelection));







console.log(`humanScore : ${humanScore}`);
console.log(`computerScore : ${computerScore}`);



