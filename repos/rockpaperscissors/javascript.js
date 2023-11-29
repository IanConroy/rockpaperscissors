let playerScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

const computerSelection = getComputerChoice();

function playerSelection(options) {
rockButton.getElementById("rockbutton").onClick;
rockButton.addEventListener("click", playRound("rock"));
paperButton.addEventListener("click", playRound("paper"));
scissorsButton.addEventListener("click", playRound("scissors"));
}



function playRound(playerSelection, computerSelection) {
    let postresult = "";
    
    if (playerSelection === computerSelection) {
        postresult = "Draw! Everyone lives another day...";
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
        postresult = "You Win! Take that, robo!";
        playerScore++;
    } else {
        postresult = "You lose! Pew pew! ZING!!!";
        computerScore++;
    }

document.getElementById("results").innerHTML = `
<p>You chose: <strong>${playerSelection}</strong></p>
<p>Computer chose: <strong>${computerSelection}</strong></p>
<p class="postresult">${postresult}</p>
`;

document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;
}

