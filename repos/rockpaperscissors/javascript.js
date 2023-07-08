function getComputerChoice() {
const options = ["rock","paper","scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

const computerSelection = getComputerChoice();


const playerSelection = ["rock","paper","scissors"]

rockButton.addEventListener("click", playRound("rock"));
paperButton.addEventListener("click", playRound("paper"));
scissorsButton.addEventListener("click", playRound("scissors"));

function playRound(playerSelection, computerSelection) {
    let postresult = "";

    if (playerSelection === computerSelection) {
        postresult = "Draw! Everyone lives another day...";
    } else if (
        (userSelection === "rock" && computerChoice === "scissors") ||
        (userSelection === "paper" && computerChoice === "rock") ||
        (userSelection === "scissors" && computerChoice === "paper")
    ) {
        postresult = "You Win! Take that, robo!";
    } else {
        postresult = "You lose! Pew pew! ZING!!!";
    }

document.getElementById("results").innerHTML = `
<p>You chose: <strong>${playerSelection}</strong></p>
<p>Computer chose: <strong>${computerSelection}</strong></p>
<p>${postresult}</p>
`;
}

