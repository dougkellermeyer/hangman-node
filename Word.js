// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//first need to pull in our Letter.js file

var Letter = require("./Letter");

//need to create something that can choose a word for the user to guess

var Word = function (hiddenWord) {
    this.hiddenWord = hiddenWord;

    //   * An array of `new` Letter objects representing the letters of the underlying word
    this.letters = [];

    //need an arry for the number of underscores
    this.underscores = [];

    //need to split the word into letters (used from previous hangman exercise)
    this.splitWord = function () {
        this.letters = this.hiddenWord.split("");
        console.log(this.letters);
        //need to have the correct amount of underscores = number of letters in the word
        numberOfUnderscores = this.letters.length;

        //need a for loop to push underscores to underscore array
        for (i = 0; i < numberOfUnderscores; i++) {
            this.underscores.push(" _ ");
        }
        console.log(this.underscores);

        //Need to use a .join the underscores we pushed to the array
        console.log(this.underscores.join(""));
    };

    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    this.generateLetter = function () {
        for (i = 0; i < this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
            this.letters[i].letterGuessCorrect = true;
            //   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
            this.letters[i].showGuess();
        }
    };

};

module.exports = Word;

