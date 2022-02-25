// Rock Paper Scissors

// Rock destroys scissors
// Scissors destroys paper
// Paper covers rock.

// tie = draw

// break the code into four parts.
// Get user choice
// Get computer choice
// Compare choices, decide the winner
// Display results.

// var userChoice = ""

var userChoice = "Rock".toLowerCase();
var botChoice = Math.floor(Math.random() * 3);
var botHand = "".toLowerCase();
var validChoice = false;


// Get bots choice in text
var getBotChoice = function getBotChoice(botInput) {
    switch (botChoice) {
        case 0:
            botHand = 'rock';
            break
        case 1:
            botHand = 'paper';
            break
        case 2:
            botHand = 'scissors';
            break
        default:
            console.log('Error');
            break
    }
    return botHand;
}

// function to test the validity of the player input.
var testPlayerChoice = function testPlayerChoice(playerInput) {
    switch (userChoice) {
        case 'rock':
            validChoice = true;
            break
        case 'paper':
            validChoice = true;
            break
        case 'scissors':
            validChoice = true;
            break
        case 'bomb':
            console.log('You win!')

        default:
            console.log('For a fair competition, enter: Rock, Paper, or Scissors.');
            // call function again to restart app.
            break
    }
    return validChoice;
}

// Function to determine win or tie
var determineWinner = function determineWinner(userChoice, botChoice) {
    if (userChoice === botHand) {
        console.log(`It's a tie!`);
    } else {
        if (userChoice === 'rock') {
            if (botHand === 'paper') {
                console.log(`You lost against ${botHand}!`);
            } else {
                console.log(`You won against ${botHand}!`);
            }
        } else if (userChoice === 'scissors') {
            if (botHand === 'rock') {
                console.log(`You lost against ${botHand}!`);
            } else {
                console.log(`You won against ${botHand}!`);
            };
        } else {
            if (botHand === 'scissors') {
                console.log(`You lost against ${botHand}!`);
            } else {
                console.log(`You won against ${botHand}!`);
            }
        }
    }
};

// Function to play the game (game engine?)

var playGame = function playGame() {
    getBotChoice(botChoice);
    testPlayerChoice(userChoice);

    if (validChoice === true) {
        determineWinner(userChoice, botHand);
    }
};

playGame();
