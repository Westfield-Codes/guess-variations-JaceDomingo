/* Define a function called rollDice */
function rollDice(){
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6+1);
    // if roll equals 6, display "6! You win!"
  if (roll == 6) alert("6! You win!")
    // otherwise:
  else {
    // use a confirm and say: "You rolled a [roll]"
  confirm("You rolled a "+roll)
    // then call rollDice again.
  rollDice();
    // close the else block
  }
  // close the function block
  }

  /* 2-guess-loop.js */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
  var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(answer)
  // create guess and set equal to 0 
guess = 0
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
guess =  prompt("Guess a number 1-100")
    // if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct")
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too High!")
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too Low!")
    // else say "Bad input"
else alert("Bad Input")
  // end the loop
}
// end the function
}

/* 3.guess-loop-quit.js */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 0 
let guess = 0
  // loop while guess is not equal to answer or to "q"
while (guess != answer && guess !="q"){

    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number betweeen 1-100")
    // if guess equals "q" display "Quitter!"
if (guess == "q") alert("Quitter!")
    // or if guess equals answer display "Correct!" 
else if (guess == answer) alert("Correct!")
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too high!")
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too low!")
else alert("Bad input")
  // end the loop
}
}

/*4-guess-play-again.js*/
/* Guess Game Program by [Jace Domingo]
 * Adds the ability to play again. 
 */

/* newGame is an outer loop giving the user an option 
 * to play again, using a boolean variable called again.
 */
function guessGame(){
  // generate a random integer 1-100
  var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(answer)
  // create guess and set equal to 0 
guess = 0
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
guess =  prompt("Guess a number 1-100")
    // if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct")
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too High!")
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too Low!")
    // else say "Bad input"
else alert("Bad Input")
  // end the loop
}
// end the function
}
// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
var again = true
  // loop as long as again is true 
while (again == true){
    // run the guessGame function 
guessGame();
    // ask to play again with again set to a confirm
again = confirm("Do you want to play again?")
    // close the loop
}
  // thank the player for playing
alert ("Thank you for playing")
  // close the function
}

/* 5-guess-quit-again.js*/

// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
var again = true
  // run the guessGame function
guessGame();
  // loop as long as again is true 
while (again == true){
    // ask to play again with again set to a confirm
again = confirm("Do you wish to play again?")
    // if again is true run the guessGame function
if (again == true) guessGame();
    // close the loop
}
  // thank the player for playing
alert("Thank you for playing!")
  // close the function
}

// create a function called guessGame
function guessGame(){
  // create guess and set equal to 0 
var guess = 0
  // create tries and set equal to 0 
var tries = 0
  // create variable answer and generate a random integer 1-100
var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(answer);
  // loop while guess is not equal to answer
while (guess != answer && guess != "q"){
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("guess a number 1-100")
    // add one to tries
tries ++;
    // if guess equals answer display "Correct in [tries] tries!" 
if (guess == answer) alert("Correct in "+tries+" tries!")
    // or if guess is "q" break the loop
else if (guess == "q") alert("Quitter!")
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too high!")
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too low!")
    // if it's none of those, say "Bad Input!"
else alert("Bad input")
    // end the loop
}
  // end the function
}