'use strict';
function getComputerChoice(){
let result = Math.floor(Math.random() *3)
    if(result === 0){return "rock"}
    else if(result === 1){return "paper"}
else{return "scissors"}
}

function getHumanChoice(){
let result = prompt("Choose rock, paper, or scissors:");


return result.toLowerCase();
}
