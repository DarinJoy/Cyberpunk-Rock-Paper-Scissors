const choices = document.querySelectorAll(".choice");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const messageEl = document.getElementById("message");

const fightModal = document.getElementById("fight-modal");
const playerMoveEl = document.getElementById("player-move");
const computerMoveEl = document.getElementById("computer-move");

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    showFightAnimation(playerChoice, computerChoice);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function showFightAnimation(playerChoice, computerChoice) {
  playerMoveEl.textContent = getEmoji(playerChoice);
  computerMoveEl.textContent = getEmoji(computerChoice);

  fightModal.style.display = "flex";
  playerMoveEl.style.animation = "shake 0.5s ease-in-out";
  computerMoveEl.style.animation = "shake 0.5s ease-in-out";

  setTimeout(() => {
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
    fightModal.style.display = "none";
  }, 2000);
}

function getEmoji(choice) {
  switch (choice) {
    case "rock":
      return "✊";
    case "paper":
      return "✋";
    case "scissors":
      return "✌️";
  }
}

function determineWinner(player, computer) {
  if (player === computer) {
    messageEl.textContent = "It's a tie!";
    return "tie";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    messageEl.textContent = "You win!";
    return "player";
  } else {
    messageEl.textContent = "Computer wins!";
    return "computer";
  }
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}
