
//declare variables-----------------------------------------------------

var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessCounter = 0;
var wins = 0;
var losses = 0;
var lettersArray = [];

console.log(randomLetter);


//When user presses a letter key, the letter is logged as userGuess

    document.onkeyup=function(event) {
        var userGuess = event.key.toUpperCase();
        console.log(userGuess);
        if (Alphanumeric(event.key)){ 
            document.getElementById("message").innerHTML ="";
        
        if (userGuess === randomLetter) {
            wins +=1;
            console.log(wins);
            document.getElementById("message").innerHTML ="Whoa, you read my mind!    I was thinking of the letter " + randomLetter + ".  Nice!   Guess a letter to test your psychic skills again.";
            guessCounter = 0;
            lettersArray = [];
            randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(randomLetter);
               
            }
        else {
            guessCounter ++;
            lettersArray.push(userGuess);
        
                if (guessCounter >= 10) {
                    document.getElementById("message").innerHTML ="You're all out of guesses...  Looks like your ESP is on the fritz!  I'm thinking of another letter if you're ready to try again...";
                    losses +=1;
                    guessCounter = 0;
                    lettersArray = [];
                    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                    console.log(randomLetter);
                    console.log(losses);
        }
    }
document.getElementById("win").innerHTML = 'Wins: ' + wins;
document.getElementById("loss").innerHTML = 'Losses: ' + losses;
document.getElementById("guesses").innerHTML = 'Tries: ' + guessCounter;
document.getElementById("letters").innerHTML = 'Your (incorrect) predictions: ' + lettersArray;
}
  
    } 

//functions---------------------------------------------------------
    function Alphanumeric(Letter){
        var Alpha = /^[a-zA-Z]$/;
        if(Letter.match(Alpha)){
            return true;
        }
        else {
            return false;
        }
     }  
   
    



