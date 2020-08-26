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

//Create a array
let colors =["red","blue","pink","purple","orange"]

//Indexing array
console.log(colors[2])
console.log(colors[colors.length-1])

//Adding in array
colors[colors.length]="white"
colors.push("maroon")
colors.push("green")

//removing from array
colors.pop()

//display
console.log(colors)

//adding in begging of array
let friendsToMeet=["sujan","ritesh","rajiv","sudip"]
friendsToMeet.unshift("Nibesh")
console.log(friendsToMeet)

//removing beggining of array
friendsToMeet.shift()
console.log(friendsToMeet)

//concat
let softdrinks=["coke","fanta","dew"]
let harddrinks =["vodka","gin","beer"]
drinks=softdrinks.concat(harddrinks)
console.log(drinks)

//includes 
let food=["momo","chowmein","chicken","noodles"]
console.log(food.includes("soup"));

//indexOf
console.log(food.indexOf("chicken"))
//checing using if else
if (food.indexOf("rice")===-1){
    console.log("Nepalase cant survive")
}

//reverse
let name=["P","R","A","S","A","N","N","A"]
console.log(name.reverse());

//join
console.log(name.reverse().join("-"))

//Slice
console.log(food.slice(1,3))

//Splice
name.splice(0,0,'E','R','.');
console.log(name);

//using const with array
const hero=["chaptain America","Spider man","hulk","superman","batman"]
hero.push("IronMan")
hero.unshift("AntMan")
console.log(hero)

//Creating a object literals
const info ={
    name:'prasanna',
    age:26,
    address:'Nepal',
    strong:true,
    1 : 'travelling',

}
console.log(info.name)
console.log(info['1'])
info['hobby']='gaming'
info.lazy=false
console.log(info)
