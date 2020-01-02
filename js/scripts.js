//Global variables to track score in game().
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    return randomChoice;
}

function playRound() {
    //Prompt player to make their choice.
    let playerChoice = window.prompt("Make your choice! Rock, Paper or Scissors?");
    
    //Case insensitive comparison of user input. Maybe rewrite to a switch case?
    if (playerChoice.toLowerCase() == "rock") {
        playerChoice = "Rock";
    }
    else if (playerChoice.toLowerCase() == "paper") {
        playerChoice = "Paper";
    }          
    else if (playerChoice.toLowerCase() == "scissors") {
        playerChoice = "Scissors";
    } 
    else {
        alert("Please refresh the page and check your spelling!");
        throw new Error("Please refresh the page and check your spelling!");
    }     

    let computerChoice = computerPlay();
    
    // Relative to number element in choices array. May need reworking (0 = Rock, 1 = Paper, 2 = Scissors)               
    // Important: = vs == vs ===
    if (playerChoice == "Rock" && (computerChoice === 0)) {
        console.log("It's a tie! You both chose Rock.");
    }               
    else  if (playerChoice == "Rock" && (computerChoice === 1)) {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (playerChoice == "Rock" && (computerChoice === 2)) {
        console.log("You win! Rock beats Scissors.");
        playerScore++;
    }

    if (playerChoice == "Paper" && (computerChoice === 0)) {
        console.log("You win! Paper beats Rock.");                    
        playerScore++;
    }               
    else  if (playerChoice == "Paper" && (computerChoice === 1)) {
        console.log("It's a tie! You both chose Paper.");
    }
    else if (playerChoice == "Paper" && (computerChoice === 2)) {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }

    if (playerChoice == "Scissors" && (computerChoice === 0)) {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }               
    else  if (playerChoice == "Scissors" && (computerChoice === 1)) {
        console.log("You win! Scissors beats Paper.");                    
        playerScore++;
    }
    else if (playerChoice == "Scissors" && (computerChoice === 2)) {
        console.log("It's a tie! You both chose Scissors.");
    }

    /*
    switch(playerChoice) {
        case 'Rock':
            switch(computerChoice) {
                //Relative to number element in choices array. May need reworking (0 = Rock, 1 = Paper, 2 = Scissors)
                case 0:
                    console.log("It's a tie! You both chose Rock.");
                    break;
                case 1:
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                    break;
                case 2:
                    console.log("You win! Rock beats Scissors.");
                    playerScore++;
                    break;
            }
        case 'Paper': 
            switch(computerChoice) {
                case 0: 
                    console.log("You win! Paper beats Rock.");
                    playerScore++;
                    break;
                case 1: 
                    console.log("It's a tie! You both chose Paper.");
                    break;
                case 2: 
                    console.log("You lose! Scissors beats Paper.");
                    computerScore++
                    break;
            }
        case 'Scissors': 
            switch(computerChoice) {
                case 0: 
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                    break;
                case 1: 
                    console.log("You win! Scissors beats Paper.");   
                    playerScore++;
                    break;
                case 2: 
                    console.log("It's a tie! You both chose Scissors.");  
                    break;
            }
    }
    */
}

function game() {
    const numRounds = 5;

    for (let i = 0; i < numRounds; i++) {
        playRound();
        console.log("Your score: " + playerScore);
        console.log("Computer's score: " + computerScore);

        //Decide the winner of the game
        if (i == 4) {
            if (playerScore > computerScore) {
                console.log("You won the game!");
            }
            else if (playerScore < computerScore) {
                console.log("You lost the game!");
            }
            else {
                console.log("It's a tie!");
            }
        }
    }
}  

game();