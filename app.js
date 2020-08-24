//Example 1 if else statement
let age=100;
if (age>=18){
    console.log("You can Vote!")
}
else if(age>=16){
    console.log("You cannot vote but can apply for citizenship")
}
else {
    console.log("You are still very young!")
}


//Example 2
let highScore=1000
let userScore=1205
if (userScore>=highScore){
    console.log(`Your score ${userScore} is now New High Score`)
    highScore=userScore
    console.log(highScore)
}
else{
    console.log(`Sorry you didnot beat your old record`)
}

//Nested if else
let userTypedPassword="prassdad2";
if (userTypedPassword.length>=8)
{
   if (userTypedPassword.indexOf(' ')!==-1){
       console.log("You cannot use space in password!")
   }
   else{
       console.log('you are good to go!')
   }
}
else{
    console.log("Please type atleast 8 character long password")
}

//Using conditional logic
let userGuessedPassword="dsadas";
if (userGuessedPassword.length>=8 && userGuessedPassword.indexOf(' ')===-1){
    console.log("Password is Valid!")
}
else{
    console.log("Password is Invalid!")
}

//Ternary operator
let num=24;
num%2===0 ? console.log("Number is Even") : console.log("Number is Odd")