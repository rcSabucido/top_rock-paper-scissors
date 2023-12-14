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

const divContent = document.createElement("div");

function playRound(playerSelection, computerSelection) {

    let caseinsensitivePlayer = playerSelection.toLowerCase();
    
    if (caseinsensitivePlayer === "rock" && computerSelection === "Rock") {
        divContent.textContent = "It's a tie!";
    } else if (caseinsensitivePlayer === "rock" && computerSelection == "Paper") {
        divContent.textContent = "You lose! Paper beats Rock";
        //computerPoint++;
    } else if (caseinsensitivePlayer === "rock" && computerSelection == "Scissors") {
        divContent.textContent = "You win! Rock beats Scissors";
        //playerPoint++;
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Rock") {
        divContent.textContent = "You win! Paper beats Rock";
        //playerPoint++;
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Paper") {
        divContent.textContent = "It's a tie!";
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Scissors") {
        divContent.textContent = "You lose! Scissors beats Paper";
        //computerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Rock") {
        divContent.textContent = "You lose! Rock beats Scissors";
        //computerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Paper") {
        divContent.textContent = "You win! Scissors beats Paper";
        //playerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Scissors") {
        divContent.textContent = "It's a tie!";
    } else {
        divContent.textContent = "Invalid input, try again!";
    }

}

/*
let playerPoint = 0;
let computerPoint = 0;

function game() {
    let userPrompt = prompt("Rock, Paper, or Scissors?");

    return playRound(userPrompt, getComputerChoice());

}


for (let c = 0; c <= 4; c++) {
    console.log(game());
}
*/

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

const rpsResults = document.querySelector(".rpsResults");


rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
})


rpsResults.appendChild(divContent);






/*
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

*/