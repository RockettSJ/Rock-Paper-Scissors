const startBtn = document.getElementById("startBtn");
const instruction = document.getElementById("instruction");
const gameInfo = document.getElementById("gameInfo");
const roundDisplay = document.getElementById("rounds");
let numRounds = 1;
let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener("click", () => {
    createInterface();
});

createInterface = () => {
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");
    roundDisplay.innerHTML = `Round ${numRounds}`;
    instruction.innerHTML = "Make your choice!";
    rockBtn.innerHTML = `<img src="images/rock.jpg" />`;
    paperBtn.innerHTML = `<img src="images/paper.jpg" />`;
    scissorsBtn.innerHTML = `<img src="images/scissors.jpg" />`;
    startBtn.style.display = "none";
    numRounds++;
};

rockBtn.addEventListener("click", () => {
    clearButtons();
    playRound("Rock");
});

paperBtn.addEventListener("click", () => {
    clearButtons();
    playRound("Paper");
});

scissorsBtn.addEventListener("click", () => {
    clearButtons();
    playRound("Scissors");
});

const clearButtons = () => {
    rockBtn.innerHTML = "";
    paperBtn.innerHTML = "";
    scissorsBtn.innerHTML = "";
};

playRound = playerChoice => {
    //todo: make images of choices and outcome (paper hugging rock, rock punching scissors with K.O, scissors giving paper a haircut)
    const computerChoice = computerPlay();
    //Player = Rock
    if (playerChoice == "Rock" && computerChoice === 0) {
        instruction.innerHTML = "It's a tie! You both chose Rock.";
    } else if (playerChoice == "Rock" && computerChoice === 1) {
        instruction.innerHTML = "You lose! Paper beats Rock.";
        computerScore++;
    } else if (playerChoice == "Rock" && computerChoice === 2) {
        instruction.innerHTML = "You win! Rock beats Scissors.";
        playerScore++;
    }

    //Player = Paper
    if (playerChoice == "Paper" && computerChoice === 0) {
        instruction.innerHTML = "You win! Paper beats Rock.";
        playerScore++;
    } else if (playerChoice == "Paper" && computerChoice === 1) {
        instruction.innerHTML = "It's a tie! You both chose Paper.";
    } else if (playerChoice == "Paper" && computerChoice === 2) {
        instruction.innerHTML = "You lose! Scissors beats Paper.";
        computerScore++;
    }

    //Player = Scissors
    if (playerChoice == "Scissors" && computerChoice === 0) {
        instruction.innerHTML = "You lose! Rock beats Scissors.";
        computerScore++;
    } else if (playerChoice == "Scissors" && computerChoice === 1) {
        instruction.innerHTML = "You win! Scissors beats Paper.";
        playerScore++;
    } else if (playerChoice == "Scissors" && computerChoice === 2) {
        instruction.innerHTML = "It's a tie! You both chose Scissors.";
    }

    displayInfo();
    checkRounds();
    //Give user time to read result, then continue
    setTimeout(function() {
        nextRound();
    }, 1500);
};

checkRounds = () => {
    if (numRounds == 6) {
        if (playerScore > computerScore) {
            instruction.innerHTML = "You won the game!";
        } else if (computerScore > playerScore) {
            instruction.innerHTML = "You lost the game!";
        } else {
            instruction.innerHTML = "It's a tie!";
        }
        roundDisplay.innerHTML = "Game over!";

        // Prevent game from continuing after 5 rounds
        window.playRound() = function() {
            return false;
        };

        numRounds = 0;
    }
};

nextRound = () => {
    createInterface();
};

displayInfo = () => {
    gameInfo.innerHTML = `
    You: ${playerScore} - CPU: ${computerScore}`;
};

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return randomChoice;
}
