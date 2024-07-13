// Function getComputerChoice 
// Randomly return "rock" ,"paper" or "scissors"

function getComputerChoice() {
    let nr = Math.floor(Math.random()*3);
    return (nr === 0) ? "rock" : (nr === 1) ? "paper" : "scissors";
}