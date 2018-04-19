// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function (character) {
    //   * A string value to store the underlying character for the letter
    // take the letter and make it uppercase using toUpperCase()
    this.character = character.toUpperCase();

    //   * A boolean value that stores whether that letter has been guessed yet
    this.letterGuessCorrect = false;

    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    this.showGuess = function () {
        if (this.letterGuessCorrect) {
            return (" " + this.character + " ");
        }
        else {
            return (" _ ");
        }
    };
    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checker = function (userGuess){
        if (this.character === userGuess.toUpperCase()) {
            this.letterGuessCorrect = true;
        }
    };
   
};

// var Doug = new Letter("a");
// Doug.checker("a");
// console.log (Doug.showGuess());
//need to export Letter.js for Word.js to work

module.exports = Letter;