function computerPlay(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ("Tie!");
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beats paper";
        }
    } else {
        return "Oops! That's no valid input";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Choose rock, paper or scissors"), computerPlay()));
    }
}