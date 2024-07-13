// Function getComputerChoice 
// Randomly return "rock" ,"paper" or "scissors"

function getComputerChoice() {
    let nr = Math.floor(Math.random()*3);
    return (nr === 0) ? "rock" : (nr === 1) ? "paper" : "scissors";
}

// Function getHumanChoice
// Take user input and return it
function getHumanChoice() {
    let userChoice = prompt("Choose 'rock','paper' or 'scissors'");
    
    return (userChoice.toLowerCase() === "rock") ? "rock" : (userChoice.toLowerCase() === "paper") ? "paper": (userChoice.toLowerCase() === "scissors") ? "scissors" : getHumanChoice();
}

// Function playRound
// Play a round and increment winner score
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("No winner.");
    } else {
        if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You are the winner of the round");
        } else {
            computerChoice++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }
}


// Scores
let humanScore = 0;
let computerScore = 0;