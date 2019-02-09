
//global variables-----------------------------------------------------

var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessCounter = 0;
var wins = 0;
var losses = 0;
var lettersArray = [];

var crystalBall = $(".crystal-ball");

console.log(randomLetter);
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/javascript/Twinkle-sound-effect.mp3");

$(document).ready(function() {
//onKey event triggerred when user presses letter key ---------------------------------------------------------------------

    document.onkeyup=function(event) {
        var userGuess = event.key.toUpperCase();
        console.log(userGuess);
        if (Alphanumeric(event.key)){ 
            document.getElementById("message").innerHTML ="";
            crystalBall.animate({ opacity: "0" }, 1000);
//If user wins-------------------------------------------------------------------------------------------------------------      
        if (userGuess === randomLetter) {
            wins +=1;
            console.log(wins);
            crystalBall.animate({ opacity: ".6" }, 500);

            setTimeout(function(){ audioElement.play(); }, 100);
            
            document.getElementById("message").innerHTML ="<h5>You must have a crystal ball!</h5>  <h5> I was thinking of the letter " + randomLetter + ". </5> <h5> I'm thinking of another letter if you're ready to try again.</h5>";
            guessCounter = 0;
            lettersArray = [];
            randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(randomLetter);
            }
//If guess is incorrect----------------------------------------------------------------------------------------------------
            
        else {
            guessCounter ++;
            lettersArray.push(userGuess);

//If user loses------------------------------------------------------------------------------------------------------------       
                if (guessCounter >= 10) {
                    document.getElementById("message").innerHTML ="<h5>You're all out of guesses...  Looks like your ESP is on the fritz! </h5> <h5> I'm thinking of another letter if you're ready to try again...</h5>";
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
   
    });   



