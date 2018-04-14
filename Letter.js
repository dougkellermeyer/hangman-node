// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function (character) {
    //   * A string value to store the underlying character for the letter
    // take the letter and make it uppercase using toUpperCase()
    this.character = character.toUpperCase();

    //   * A boolean value that stores whether that letter has been guessed yet
    this.letterGuessCorrect = false;

    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

     //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.showGuess = function () {
        if (this.letterGuessCorrect) {
            console.log(this.character);
        }
        else {
            console.log(" _ ");
        }
    };

   

};


//need to export Letter.js for Word.js to work

module.exports = Letter;