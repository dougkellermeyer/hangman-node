// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//first need to pull in our Letter.js file

var Letter = require("./Letter");

//need to create something that can choose a word for the user to guess

var Word = function (hiddenWord) {
    this.hiddenWord = hiddenWord;

    //   * An array of `new` Letter objects representing the letters of the underlying word
    this.letters = [];



    //need to split the word into letters (used from previous hangman exercise)
    // this.splitWord = function () {
    //     this.letters = this.hiddenWord.split("");
    //     // console.log(this.letters);
    //     //need to have the correct amount of underscores = number of letters in the word
    //     numberOfUnderscores = this.letters.length;

    //     //need a for loop to push underscores to underscore array
    //     for (i = 0; i < numberOfUnderscores; i++) {
    //         this.underscores.push(" _ ");
    //     }
    //     // console.log(this.underscores);

    //     //Need to use a .join the underscores we pushed to the array
    //     console.log(this.underscores.join(""));
    // };

    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    this.generateLetter = function () {
        for (var i = 0; i < this.hiddenWord.length; i++) {
            var newLetter = new Letter(this.hiddenWord[i]);
            //   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
            this.letters.push(newLetter);
            // this.letters[i].showGuess();

        }
    };

    this.display = function () {
        var string = "";
        for (var i = 0; i < this.letters.length; i++) {
            string += (this.letters[i].showGuess());
        }
        return (string);
    };

    // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

    this.checkGuess = function (userGuess) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checker(userGuess);
        }
    };

    this.checkerFinal = function () {
        var allRight = true;
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].letterGuessCorrect) {
                allRight = false;
            }
        }
        return(allRight);
    };

};

var Doug = new Word("app");
Doug.generateLetter();
console.log(Doug.display());
Doug.checkGuess("p");
console.log(Doug.display());
console.log(Doug.checkerFinal());
Doug.checkGuess("a");
console.log(Doug.display());
console.log(Doug.checkerFinal());


module.exports = Word;

