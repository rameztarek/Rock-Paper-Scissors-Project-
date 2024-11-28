const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsMsg = document.getElementById('results-msg');
const winnerMsg = document.getElementById('winner-msg');
const loserMsg = document.getElementById('loser-msg');
const resetGameBtn = document.getElementById('reset-game-btn');
const resetGameBtnV = document.getElementById('reset-game-btn-v');
const optionsContainer = document.querySelector('.option-container')


function getRandomComputerResult () {
  const options = ["Rock" , "Paper" , "Scissors"];
  const results = Math.floor(Math.random() * options.length);
  return options[results];
}

function isPlayerWin (player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0; 
let computerScore = 1;

function getRoundResults(userOption) {
  const computerOption = getRandomComputerResult();
  if (isPlayerWin(userOption , computerOption)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerOption}`;
  }else if (userOption === computerOption) {
    return `It's a tie! Both chose ${userOption}`;
  }else {
    computerScore++;
    return `Computer wins! ${computerOption} beats ${userOption}`;
  }
}

function showResults(userOption){
  resultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3) {
    winnerMsg.innerText = `Player has won the game!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }else if (computerScore === 3) {
    loserMsg.style.display = "block";
    resetGameBtnV.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScoreSpanElement.innerText = playerScore = 0;
  computerScoreSpanElement.innerText = computerScore = 0;
  resultsMsg.innerText = ""
  winnerMsg.innerText = ""
  resetGameBtn.style.display = "none"
  resetGameBtnV.style.display = "none"
  loserMsg.style.display = "none"
  optionsContainer.style.display = "block"
}

resetGameBtn.addEventListener("click", resetGame);
resetGameBtnV.addEventListener("click", resetGame);


rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
