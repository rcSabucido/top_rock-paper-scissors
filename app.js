let playerPoint = 1;
let computerPoint = 1;

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
const runningComputerScore = document.querySelector(".runningComputerScore");
const runningPlayerScore = document.querySelector(".runningPlayerScore");
const playerScore = document.createElement("int");
const computerScore = document.createElement("int");



function playRound(playerSelection, computerSelection) {

    let caseinsensitivePlayer = playerSelection.toLowerCase();
    
    
    if (caseinsensitivePlayer === "rock" && computerSelection === "Rock") {
        divContent.textContent = "It's a tie!";
    } else if (caseinsensitivePlayer === "rock" && computerSelection == "Paper") {
        divContent.textContent = "You lose! Paper beats Rock";
        computerScore.textContent = computerPoint++;
    } else if (caseinsensitivePlayer === "rock" && computerSelection == "Scissors") {
        divContent.textContent = "You win! Rock beats Scissors";  
        playerScore.textContent = playerPoint++;
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Rock") {
        divContent.textContent = "You win! Paper beats Rock";
        playerScore.textContent = playerPoint++;
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Paper") {
        divContent.textContent = "It's a tie!";
    } else if (caseinsensitivePlayer === "paper" && computerSelection == "Scissors") {
        divContent.textContent = "You lose! Scissors beats Paper";
       computerScore.textContent = computerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Rock") {
        divContent.textContent = "You lose! Rock beats Scissors";
        computerScore.textContent = computerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Paper") {
        divContent.textContent = "You win! Scissors beats Paper";
        playerScore.textContent = playerPoint++;
    } else if (caseinsensitivePlayer === "scissors" && computerSelection == "Scissors") {
        divContent.textContent = "It's a tie!";
    } else {
        divContent.textContent = "Invalid input, try again!";
    }


}



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
runningPlayerScore.append(playerScore);
runningComputerScore.append(computerScore);
