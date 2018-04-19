//Need to bring in our Word.js file
var Word = require("./Word");

//Need to bring in the nmp packages for prompt and inquire

// var prompt = require("prompt");
var inquirer = require("inquirer");

// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

var letterGuessCorrect = false;

//List of words to choose from
var wordBank = ["browns", "bengals", "steelers", "ravens", "patriots", "cowboys", "eagles", "packers", "49ers", "raiders", "seahawks", "vikings", "bears", "giants", "broncos", "redkins", "dolphins", "saints", "jets", "panthers", "rams", "bills", "colts", "titans", "cardinals", "falcons", "lions", "texas", "chiefs", "jaguars", "chargers", "buccaneers"];

var randomWord;
var otherword;

// need to count players guesses, wins, and losses
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


// need a variable to hold the user's guess
var userGuess = "";
var lettersGuessed = "";
var lettersGuessedArray = [];
var numberUnderscores = 0;

console.log("Welcome to the Hangman Game!");
console.log("=========================================================================================================");
console.log("You will be guessing an NFL team name. Ex. Browns");

var frontscreen = 
    "=========================================================================================================" + "\r\n" +
    "How to play" + "\r\n" +
    "=========================================================================================================" + "\n" +
    "When prompted to enter a letter, press any letter on your keyboard to guess a letter." + "\n" +
    "When you guess a letter, your choice is either correct or incorrect." + "\n" +
    "You will have 10 guesses per game" + "\n" +
    "If incorrect, the letter you guessed will not appear in the word." + "\n" + 
    "For every incorrect guess, the number of guesses remaining decrease by 1." + "\n" +
    "If correct, the letter you guessed appears in the word." + "\n" +
    "If you correctly guess all the letters in the word before the number of guesses remaining reaches 0, you win." + "\n" +
    "If you run out of guesses before the entire word is revealed, you lose. You should watch more football and play again" + "\n" +
    "=========================================================================================================" + "\n";
    console.log(frontscreen);

    startGame();

//function to start game, taken from previous hangman game assignment

function startGame() {
    guessesRemaining = 10;
    selectRandomWord();
    lettersGuessed = "";
    lettersGuessedArray = [];
}

//   * Randomly selects a word and uses the `Word` constructor to store it

function selectRandomWord() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
    // console.log(randomWord);
    otherword = new Word (randomWord);

    console.log("Your word contains " + randomWord.length + " letters.");
    console.log("WORD TO GUESS:");

    otherword.generateLetter();
    guessLetter();
}

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
function guessLetter() {
    if (numberUnderscores < otherword.letters.length || guessesRemaining > 0) {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter: ",

            }
        ])
        .then(function (guess) {
                guess.letter.toUpperCase();
                console.log("You guessed; " + guess.letter.toUpperCase());
                letterGuessCorrect = false;
                if (lettersGuessedArray.indexOf(guess.letter.toUpperCase()) > -1) {
                    console.log("You already guessed that letter, try again!");
                    guessLetter();
                }


                else if (lettersGuessedArray.indexOf(guess.letter.toUpperCase()) === -1) {

                    lettersGuessed = lettersGuessed.join("" + guess.letter.toUpperCase());
                    lettersGuessedArray.push(guess.letter.toUpperCase);
                    console.log("Letters already guessed: ", + lettersGuessed);
                }

                //Need to loop the list of words to see if the letter matches the word

                    for (i = 0; i < otherword.letters.length; i++) {
                    //If the user guess equals one of the letters/characters in the word and letterGuessCorrect is equal to false for that letter
                        if ((guess.letter.toUpperCase() === otherword.letters[i].guess) && (otherword.letters[i].letterGuessCorrect === false)) {
                             otherword.letters[i].letterGuessCorrect = true;
                             letterGuessCorrect = true;
                             otherword.underscores[i] = guess.letter.toUpperCase();
                             underscores++; 
                    }
                }
                console.log("WORD TO GUESS: ");
                otherword.splitWord();
                otherword.generateLetter();

                //If user guessed correctly
                if (letterGuessCorrect) {

                    console.log("CORRECT!");
                    console.log("=====================================================================");
                    //After each letter guess, check if the user won or lost.
                    checkIfUserWon();
                }

                //If user guessed incorrectly...
                else {

                    console.log('INCORRECT!');
                    //Decrease number of guesses remaining by 1 and display number of guesses remaining.
                    guessesRemaining--;
                    console.log("You have " + guessesRemaining + " guesses left.");
                    console.log("=====================================================================");
                    //After each letter guess, check if the user won or lost.
                    checkIfUserWon();
                }

            });
    }
}

//check to see if user won
function checkIfUserWon() {
    //If number of guesses remaining is 0, end game.
    if (guessesRemaining === 0) {
        console.log("=====================================================================");
        console.log('YOU LOSE. TRY AGAIN');
        console.log("The correct team was: " + randomWord);
        //Increment loss counter by 1.
        losses++;
        //Display wins and losses totals.
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("=====================================================================");
        startGame();
    }

    //else if the number of slots/underscores that are filled in with a letter equals the number of letters in the word, the user won.
    else if (underscores === otherword.letters.length) {
        console.log("=====================================================================");
        console.log("YOU WON!");
        //Increment win counter by 1.
        wins++;
        //Show total wins and losses.
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("=====================================================================");
        startGame();
    }

    else {
        //If user did not win or lose after a guess, keep running inquirer.
        guessLetter("");
    }

}

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)


