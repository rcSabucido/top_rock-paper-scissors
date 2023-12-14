function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomComputerChoice) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    let caseinsensitivePlayer = playerSelection.toLowerCase();
    let result;
    
    if (caseinsensitivePlayer === "rock" && computerSelection === "Rock") {
        result = "It's a tie";
    } else if (caseinsensitivePlayer === "rock" && computerSelection == "Paper") {
        result = "You lose! Paper beats Rock";
        computerPoint++;
    } else if (caseinsensitivePlayer === "rock" && computerSelection == "Scissors") {
        result = "You win! Rock beats Scissors";
        playerPoint++;
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Rock") {
        result = "You win! Paper beats Rock";
        playerPoint++;
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Paper") {
        result = "It's a tie!";
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Scissors") {
        result = "You lose! Scissors beats Paper";
        computerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Rock") {
        result = "You lose! Rock beats Scissors";
        computerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Paper") {
        result = "You win! Scissors beats Paper";
        playerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Scissors") {
        result = "It's a tie!";
    } else {
        result = "Invalid input, try again!";
    }

    return result;
}

let playerPoint = 0;
let computerPoint = 0;

function game() {
    let userPrompt = prompt("Rock, Paper, or Scissors?");

    return playRound(userPrompt, getComputerChoice());

}

for (let c = 0; c <= 4; c++) {
    console.log(game());
}



function scoreCount() {
    let gameOutcome;

    if (playerPoint > computerPoint) {
        gameOutcome = "You have more points than your opponent, you win!";
    } else if (computerPoint > playerPoint) {
        gameOutcome = "You have less points than your opponent, you lose!";
    } else {
        gameOutcome ="Something went wrong.";
    }

    return gameOutcome;
}

console.log(scoreCount());

