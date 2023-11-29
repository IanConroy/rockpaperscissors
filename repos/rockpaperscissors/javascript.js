let playerScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
const randomIndex = Math.floor(Math.random() * options.length);
return options;
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let postResult = "";
    
    if (playerSelection === computerSelection) {
        postResult = "Draw! Everyone lives another day...";
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
        postResult = "You Win! Take that, robo!";
        playerScore++;
    } else {
        postResult = "You lose! Pew pew! ZING!!!";
        computerScore++;
    }
}

