//Random Number
var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Wins, Losses and Guesses
let wins = 0;
let losses = 0;
let guesses = 10;
let guessesLeft = 10;
let guessedLetters = [];
var letterGuess = null;

//random letter gen
var randomLetterGen = randomLetter[Math.floor(Math.random()* randomLetter.length)];

//allowing 9 guesses
function changeGuessesLeft(){
    document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

function changeCurrentGuesses() {
    document.querySelector('#guesses').innerHTML = "Your Guesses: " + guessedLetters.koin(',');

};

function changeLetterGuess() {
    this.letterGuess = this.randomLetter[Math.floor(Math.random() * this.randomLetter.length)];
};

//resets everything
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedNumbers = [];
    
    changeLetterGuess();
    changeGuessesLeft();
    changeCurrentGuesses();
    )
}

changeLetterGuess();
changeGuessesLeft();

//when you press a key it becomes userGuess
document.onkeyup = function(event) {
    var userGuess =  String.fromCharCode(event.keyCode).toLowerCase();
    var isGuessLetter = randomLetterGen.includes(userGuess);

    if(isGuessLetter===false) {
        return false;
    } else if (isGuessLetter===true) {
        guessesLeft---;
        guessedLetters.push(userGuess);
        changeGuessesLeft();
        changeCurrentGuesses();

        if (guessesLeft > 0) {
            if(userGuess === letterGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();

        }
        return false;
    } 
};