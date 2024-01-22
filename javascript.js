let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * options.length);
    let computerOpt = options[randomizer];
    return computerOpt.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

document.getElementById("pScore").textContent = "Player Score: " + playerScore;
document.getElementById("cScore").textContent = "Computer Score: " + computerScore;

 /* function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("choose your weapon - rock, paper or scissors...");
        let computerSelection = getComputerChoice();
        const player = playerSelection.toLowerCase();
        const computer = computerSelection.toLowerCase();
        results = playRound(player, computer);
        console.log(results);
        if (results.includes("win")) {
            playerScore++;
        } else if (results.includes("lose")) {
            computerScore++;
        }
    }   
        if (playerScore > computerScore) {
                console.log("Well done. You have vanquished robo...for now.");
            } else if (playerScore < computerScore) {
                console.log("YOU LOSE. Pew pew! ZING!!!!")
            } else {
                console.log("Draw...");
            } 
*/

/*      !!!ALTERNATIVE IF-ELSE STATEMENT!!!
        function playRound(playerSelection) {
            let player = playerSelection.toLowerCase();
            computerSelection = getComputerChoice();
            let computer = computerSelection.toLowerCase();
            let results = document.getElementById("gameResults");    
            if (player === computer) {
                results.textContent = `tie. you both chose ${player}`;
            } else if (
                (player === "rock" && computer === "scissors") ||
                (player === "paper" && computer === "rock") ||
                (player === "scissors" && computer === "paper")
                ) {
                playerScore++;
                results.textContent = `you win! ${player} beats ${computer}`;
            } else { 
                computerScore++;
                results.textContent = `you lose. ${computer} beats ${player}`;
        }         
        document.getElementById("pScore").innerHTML = "Player Score: " + playerScore;
        document.getElementById("cScore").innerHTML = "Computer Score: " + computerScore;
}
*/

function playRound(playerSelection) {
    let player = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    let computer = computerSelection.toLowerCase();
    let results = document.getElementById("gameResults");
    let nameWinner = document.getElementById("nameWinner");
    if (playerScore === 5) {
        nameWinner.textContent = "you have vanquished AI...";
        return "but they live in your head rent free...";
    }
    if (computerScore === 5) {
        nameWinner.textContent = "uh oh. AI won. now comes the apocalypse";
        return "you need a time machine";
    }
            switch (`${player}-${computer}`) {      
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
            playerScore++;
            results.textContent = `you win. ${player} beats ${computer}`;
            break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
            results.textContent = `you lose. ${computer} beats ${player}`;
            computerScore++;
            break;
            default:
            results.textContent = `tie. you both chose ${player}`
            }
            document.getElementById("pScore").textContent = "Player Score: " + playerScore;
            document.getElementById("cScore").textContent = "Computer Score: " + computerScore;
    }

    document.getElementById("rockButton").addEventListener("click", function() {
        playRound("rock");
    });
    document.getElementById("paperButton").addEventListener("click", function() {
        playRound("paper");
    });
    document.getElementById("scissorsButton").addEventListener("click", function() {
        playRound("scissors");
    });
