let playerPoint = 0;
let computerPoint = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomComputerChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

const divContent = document.createElement("div");
const playerScore = document.createElement("int");
const computerScore = document.createElement("int");
const rpsWinner = document.createElement("p");

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")) {

        playerPoint++
        divContent.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
        playerScore.textContent = playerPoint;

        if (playerPoint === 5) {
            rpsWinner.textContent = "You won the game! Reload the page to play again."
            disableButtons();
        }
    } else if (playerSelection === computerSelection){
        divContent.textContent = `It's a tie, you both chose ${playerSelection}`;
    } else {
        computerPoint++
        divContent.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`
        computerScore.textContent = computerPoint;

        if (computerPoint === 5) {
            rpsWinner.textContent = `The computer has won the game! Reload the page to play again.`;
            disableButtons()
        }
    }
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const rpsResults = document.querySelector(".rpsResults");
const gameWinner = document.querySelector(".gameWinner");

const runningComputerScore = document.querySelector(".runningComputerScore");
const runningPlayerScore = document.querySelector(".runningPlayerScore");


rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

rpsResults.appendChild(divContent);
runningPlayerScore.append(playerScore);
runningComputerScore.append(computerScore);
gameWinner.append(rpsWinner);
