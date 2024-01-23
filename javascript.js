let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * options.length);
    let computerOpt = options[randomizer];
    return computerOpt.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

document.getElementById("pScore").textContent = "player Score: " + playerScore;
document.getElementById("cScore").textContent = "computer Score: " + computerScore;

/*      !!!I found the if-else statement most succinct, but explored other
options and left them commented out below. I had a lot of fun doing that. */

        function playRound(playerSelection) {
            let player = playerSelection.toLowerCase();
            computerSelection = getComputerChoice();
            let computer = computerSelection.toLowerCase();
            let results = document.getElementById("gameResults");
            let nameWinner = document.getElementById("nameWinner");
                if (playerScore === 5) {
            nameWinner.textContent = "you have vanquished robo...";
            return "but they live in your head rent free...";
    }
                if (computerScore === 5) {
            nameWinner.textContent = "uh oh. robo won. enter the apocalypse.";
            return "you need a time machine";
    }    
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
            document.getElementById("pScore").textContent = "player Score: " + playerScore;
            document.getElementById("cScore").textContent = "computer Score: " + computerScore;

            if (playerScore === 5) {
                nameWinner.textContent = "you have vanquished robo...";
            } else if (computerScore === 5) {
                nameWinner.textContent = "uh oh. robo won. enter the apocalypse."
            }
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

/*       !!!ALTERNATIVE SWITCH STATEMENT!!! 

function playRound(playerSelection) {
    let player = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    let computer = computerSelection.toLowerCase();
    let results = document.getElementById("gameResults");
    let nameWinner = document.getElementById("nameWinner");
    if (playerScore === 5) {
        nameWinner.textContent = "you have vanquished robo...";
        return "but they live in your head rent free...";
    }
    if (computerScore === 5) {
        nameWinner.textContent = "uh oh. robo won. enter the apocalypse.";
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
            if (playerScore === 5) {
                nameWinner.textContent = "you have vanquished robo...";
            } else if (computerScore === 5) {
                nameWinner.textContent = "uh oh. robo won. enter the apocalypse."
            }
            document.getElementById("pScore").textContent = "Player Score: " + playerScore;
            document.getElementById("cScore").textContent = "Computer Score: " + computerScore;
    }
*/ 

 /*             !!!HYBRID SWITCH/IF-ELSE!!! 

    function playRound(playerSelection) {
        let player = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        let computer = computerSelection.toLowerCase();
        let results = document.getElementById("gameResults");
        let nameWinner = document.getElementById("nameWinner");
        if (playerScore === 5) {
            nameWinner.textContent = "you have vanquished robo...";
            return "but they live in your head rent free...";
        }
        if (computerScore === 5) {
            nameWinner.textContent = "uh oh. robo won. enter the apocalypse.";
            return "you need a time machine";
        }
                switch (`${player}-${computer}`) {      
                case "rock-paper":
                case "paper-scissors":
                case "scissors-rock":
                results.textContent = `you lose. ${computer} beats ${player}`;
                computerScore++;
                break;
                default:
                if (player === computer) {
                    results.textContent = `tie. you both chose ${player}`;
                } else {
                    playerScore++;
                    results.textContent = `you win. ${player} beats ${computer}`
                }
        }
        if (playerScore === 5) {
            nameWinner.textContent = "you have vanquished robo...";
        } else if (computerScore === 5) {
            nameWinner.textContent = "uh oh. robo won. enter the apocalypse."
        }
        document.getElementById("pScore").textContent = "Player Score: " + playerScore;
        document.getElementById("cScore").textContent = "Computer Score: " + computerScore;
    }
    */