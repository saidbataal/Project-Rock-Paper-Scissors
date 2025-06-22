'use strict';
function getComputerChoice() {
  let result = Math.floor(Math.random() * 3)
  if (result === 0) { return "rock" }
  else if (result === 1) { return "paper" }
  else { return "scissors" }
}

/*function getHumanChoice() {
  let result = prompt("Choose rock, paper, or scissors:");


  return result.toLowerCase();
}*/




/*let humanSelection ;
let computerSelection ;*/








let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {

  if (humanChoice === "rock" && computerChoice === "scissors") { ++humanScore; winner.textContent = "You win! Rock beats scissors."; }
  else if (humanChoice === "rock" && computerChoice === "rock") { winner.textContent =  "It's a tie! You both chose the same."; }
  else if (humanChoice === "rock" && computerChoice === "paper") { ++computerScore; winner.textContent =  "You lose! Paper beats Rock."; }

  else if (humanChoice === "paper" && computerChoice === "scissors") { ++computerScore; winner.textContent =  "You lose! scissors beats paper."; }
  else if (humanChoice === "paper" && computerChoice === "paper") { winner.textContent =  "It's a tie! You both chose the same."; }
  else if (humanChoice === "paper" && computerChoice === "rock") { ++humanScore; winner.textContent =  "You win! Paper beats Rock."; }

  else if (humanChoice === "scissors" && computerChoice === "rock") { ++computerScore; winner.textContent =  "You lose! rock beats scissors."; }
  else if (humanChoice === "scissors" && computerChoice === "scissors") { winner.textContent =  "It's a tie! You both chose the same."; }
  else if (humanChoice === "scissors" && computerChoice === "paper") { ++humanScore; winner.textContent =  "You win! scissors beats paper."; }


};





function playGame() {
  for (let i = 0; i < 5; i++) {
     /*let humanSelection = getHumanChoice();*/
     let computerSelection = getComputerChoice();
    /*console.log(`humanChoice : ${humanSelection}`);
    console.log(`computerChoice : ${computerSelection}`);*/
    console.log(playRound(humanSelection, computerSelection));
   
    /*console.log(`humanScore : ${humanScore}`);
    console.log(`computerScore : ${computerScore}`);*/
    
  }
  if(humanScore > computerScore){return "you win";}
  else if (humanScore === computerScore){return "equality"}
  else{return "you lose";}

}



/*console.log(playGame());*/






const rock = document.querySelector(".rock");
rock.addEventListener("click" , () => {let result = getComputerChoice();
  playRound("rock", result);computerChoice.textContent = "computer choice : " + result;
yourChoice.textContent = "your choice : rock";humanscore.textContent = "human score : " + humanScore ;
computerscore.textContent = "computer score : " + computerScore;});




const paper = document.querySelector(".paper");
paper.addEventListener("click" , () => {let result = getComputerChoice();
   playRound("paper", result);computerChoice.textContent = "computer choice : " + result;
  yourChoice.textContent = "your choice : paper";humanscore.textContent = "human score : " + humanScore ;
computerscore.textContent = "computer score : " + computerScore;});




const scissors = document.querySelector(".scissors");
scissors.addEventListener("click" , () => {let result = getComputerChoice();
playRound("scissors", result);computerChoice.textContent = "computer choice : " + result;
yourChoice.textContent = "your choice : scissors";humanscore.textContent = "human score : " + humanScore ;
computerscore.textContent = "computer score : " + computerScore;});




const computerChoice = document.querySelector(".computerChoice");

const yourChoice = document.querySelector(".yourChoice");


const winner = document.querySelector(".winner");







const humanscore = document.querySelector(".humanscore");




const computerscore = document.querySelector(".computerscore");


const round = document.querySelector(".round");

const finaleResult = document.querySelector(".finaleResult");

const reloadToPlay = document.querySelector(".reloadToPlay");

const fiveRound = document.querySelectorAll("button");
let clickCount = 0;
fiveRound.forEach((button) =>{
button.addEventListener("click", () => {

clickCount++;

if(clickCount < 5){round.textContent = `round ${clickCount}/5`;}


else if (clickCount === 5) {if(humanScore > computerScore){finaleResult.textContent = "you win";}
  else if (humanScore === computerScore){finaleResult.textContent = "equality";}
  else{finaleResult.textContent = "you lose";};round.textContent = `round ${clickCount}/5`;
  rock.disabled = true;paper.disabled = true;scissors.disabled = true;
  reloadToPlay.textContent = "Game over! Please reload the page to play again."};


});});

