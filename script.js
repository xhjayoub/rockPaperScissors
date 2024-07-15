// Function getComputerChoice
// Randomly return "rock" ,"paper" or "scissors"

function getComputerChoice() {
  let nr = Math.floor(Math.random() * 3);
  return nr === 0 ? "rock" : nr === 1 ? "paper" : "scissors";
}
// Check winner
function checkWinner(hmScore, cpScore) {
  if (hmScore>=5) {
    alert("YOU ARE THE WINNER!");
    return true;
  } else if (cpScore>=5) {
    alert("NAH YOU ARE A LOSER.");
    return true;
  }
}
// Function playRound
// Play a round and increment winner score
function playRound(humanChoice, computerChoice) {
  const message = document.querySelector(".message");
  message.innerHTML = "";
  const p = document.createElement("p");
  const hmScore = document.querySelector("#hmScore");
  const cpScore = document.querySelector("#cpScore");
  if (humanChoice === computerChoice) {
    p.textContent = "No winner.";
  } else {
    if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      p.textContent = "You are the winner. " + humanChoice + " beats " + computerChoice;
    } else {
      computerScore++;
      p.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
    }
  }
  hmScore.textContent = "Your score : " + humanScore;
  cpScore.textContent = "Computer score : " + computerScore;
  message.appendChild(p);
  let v = checkWinner(humanScore,computerScore);
  if (v===true) {
    const arrbtn = document.querySelectorAll("button");
    arrbtn.forEach((e) => e.disabled = true);
    const reloadPage = document.createElement("p");
    reloadPage.textContent = "Reload the page to play again."
    document.querySelector(".message").appendChild(reloadPage);
  }
}

// Scores
let computerScore = 0;
let humanScore = 0;


const rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
const paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
const scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";

rockbtn.addEventListener("click", () => playRound("rock",getComputerChoice()));
paperbtn.addEventListener("click", () => playRound("paper",getComputerChoice()));
scissorsbtn.addEventListener("click", () => playRound("scissors",getComputerChoice()));


const body = document.querySelector("body");
const divSelection = document.createElement("div");
divSelection.setAttribute("class","selection");
divSelection.appendChild(rockbtn);
divSelection.appendChild(paperbtn);
divSelection.appendChild(scissorsbtn);
body.appendChild(divSelection);

const divStatus = document.createElement("div");
divStatus.setAttribute("class","status");

const divScores = document.createElement("div");
divScores.setAttribute("class","scores");
const hmScore = document.createElement("span");
hmScore.setAttribute("id","hmScore");
hmScore.textContent = "Your score : " + humanScore;

const cpScore = document.createElement("span");
cpScore.setAttribute("id","cpScore");
cpScore.textContent = "Computer score : " + computerScore;
divScores.appendChild(hmScore);
divScores.appendChild(cpScore);
divStatus.appendChild(divScores);

const divMessage = document.createElement("div");
divMessage.setAttribute("class","message");
divStatus.appendChild(divMessage);


body.appendChild(divStatus);
