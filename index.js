function computerPlay(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ("Tie");
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Lose";
        } else if (computerSelection === "scissors") {
            return "Win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Lose";
        } else if (computerSelection === "rock") {
            return "Win";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Lose";
        } else if (computerSelection === "paper") {
            return "Win";
        }
    } else {
        return "Error";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors");
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection)
        if (outcome === "Win") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (outcome === "Lose") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (outcome === "Tie") {
            console.log("Tie!")
        } else if (outcome === "Error") {
            console.log("Oops! That's no valid input");
            i--;
        }
    }
}