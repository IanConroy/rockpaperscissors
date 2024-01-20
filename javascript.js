let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * options.length);
    let computerOpt = options[randomizer];
    return computerOpt.toLowerCase();
}

 function game() {
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
            function playRound(player, computer) {
                if (player === computer) {
                    return `"tie. you both chose ${player}"`;
                    
                } else if (
                    (player === "rock" && computer === "scissors") ||
                    (player === "paper" && computer === "rock") ||
                    (player === "scissors" && computer === "paper")
                ) {
                    return `"you win! ${player} beats ${computer}"`;
                } else { return `"you lose. ${computer} beats ${player}"`;
                    }
            }
        }
