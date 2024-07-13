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
    
    return (userChoice === "rock") ? "rock" : (userChoice === "paper") ? "paper": (userChoice === "scissors") ? "scissors" : undefined;
}


// Scores
let humanScore = 0;
let computerScore = 0;