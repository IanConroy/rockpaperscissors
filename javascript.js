let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
let randomizer = Math.floor(Math.random() * options.length);
let computerOpt = options[randomizer];
return computerOpt.toLocaleLowerCase;
}

 /* function game() { 
    
    for  (let round = 1; round <= 5; round++) 
    let computerSelection = getComputerChoice(); 
    let result = playRound(playerSelection, computerSelection);
   
    if (result.includes("win")) {
        playerScore++; 
    } else if (result.includes("lose")) {
        computerScore++;
    }
    }
    


    if (playerScore > computerScore) {
        results.textContent = "Well done. You have vanquished robo...for now.";
    } else if (playerScore < computerScore) {
        results.textContent = "YOU LOSE. Pew pew! ZING!!!!";
    } else {
        results.textContent = "Draw...";
    }
*/

function playRound(playerSelection) {
    let playerScore = document.querySelector("#playerScore");
    let computerScore = document.querySelector("#computerScore");
    let gameResults = document.querySelector("#gameResults");
    let textResults = document.createElement("div");
    textResults.classList.add("textResults");
    textResults.textContent = "";
    gameResults.appendChild(textResults);
    let computerSelection = getComputerChoice();
    for (let round = 1; round <= 5; round++) {
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper") 
        ) {
            playerScore++;
            textResults += `"You win! ${playerSelection} beats ${computerSelection}!"`;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection == computerSelection) {
            textResults += "it's a tie";
        } else {
            computerScore++;
            textResults += `"You lose! ${computerSelection} beats ${playerSelection}!"`;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
     }
    }
    if (playerScore > computerScore) {
        textResults.textContent = "Well done. You win...for now.";
    } else if (playerScore < computerScore) {
        textResults.textContent = "You lose! Pew pew! ZING!!!!";
    } else {
        textResults.textContent = "Draw...";
    }
    
    if (player === computer) {
        textResults += "it's a tie!";
        return "It's a tie!";
    }
    const rockButton = document.querySelector("#rockButton");
rockButton.onclick = () => playRound();


const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", playRound("paper"));

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", playRound("scissors"));
 
}

/* game() 
let playerScore = 0;
    let computerScore = 0;
    
    for (let round = 1; round <= 10; round++) {

    let result = playRound(player, computerSelection);
    console.log(result);
    if (result.includes("win")) {
        playerScore++; 
    } else if (result.includes("lose")) {
        computerScore++;
    }
    }
    if (playerScore > computerScore) {
        gameResults.textContent = "Well done. You have vanquished robo...for now.";
    } else if (playerScore < computerScore) {
        gameResults.textContent = "YOU LOSE. Pew pew! ZING!!!!";
    } else {
        gameResults.textContent = "Draw...";
    }
    */


const buttonPlace = document.querySelector("#buttonPlace");
const buttonContent = document.createElement("div");
buttonContent.classList.add("buttonContent");
buttonContent.textContent = "Buttons go here!";




