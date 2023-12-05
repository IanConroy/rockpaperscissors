let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
let randomizer = Math.floor(Math.random() * options.length);
let computerOpt = options[randomizer];
return computerOpt;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    /*     *****REMOVED FOR NOW*****

    for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("What is your choice of weaponry? Rock, paper or scissors?");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
        playerScore++; 
    } else if (result.includes("lose")) {
        computerScore++;
    }
    }
    */


    if (playerScore > computerScore) {
        console.log("Well done. You have vanquished robo...for now.");
    } else if (playerScore < computerScore) {
        console.log("YOU LOSE. Pew pew! ZING!!!!")
    } else {
        console.log("Draw...");
    }
}
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper") 
    ) {
        return `You win! ${player} beats ${computer}!`;
    } else {
    return `You lose! ${computer} beats ${player}!`;
 }    
}


const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener.click.playRound(rock, computerSelection);
const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener.click.playRound(paper, computerSelection);
const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener.click.playRound(scissors, computerSelection);

const results = document.querySelector("#results");