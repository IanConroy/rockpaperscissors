function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}


const computerSelection = getComputerChoice();


const rockButton = document.getElementById("rockbutton");
const paperButton = document.getElementById("paperbutton");
const scissorsButton = document.getElementById("scissorsbutton");
const playerSelection = [rockButton, paperButton, scissorsButton];

function playRound(playerSelection, computerSelection) {
    let post = "";

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            post = "Paper wins. Git gud, n00b.";
        } else if (computerSelection ==="scissors") {
            post = "You won. That sure \"rocks\" eh?";
        } else {
            post = "Tie. You both rocked out."
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            post = "Scissors won. Git gud, n00b."; 
        } else if (computerSelection === "rock") {
            post = "You won because somehow, in this game, paper>rock.";
            } else {
                post = "Tie. Neither of you could cut it."
            }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            post = "You got rocked. Git gud, n00b.";
        } else if (computerSelection === "paper") {
            post = "You won. You made the cut.";
        } else {
            post = "Tie. Neither of you made the cut.";
        }
    }
    return post;
}


rockButton.addEventListener("click", function() {
    playRound("rock");
})

paperButton.addEventListener("click", function() {
    playRound("paper");
})

scissorsButton.addEventListener("click", function() {
    playRound("scissors");
})
    

