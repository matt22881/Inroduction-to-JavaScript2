/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

function canIVote() {
const votingAge = 18;
let age = parseInt(prompt("How old are you?"));
if (age > votingAge){
    console.log("True");}
    else if (age === 18){
        console.log("Why not true?  I don't know either!");}
    else {console.log("No Voting For You!");}
    return(age > votingAge);
    }

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let x = 1;
const y = 2;
x = x + y;

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const graduationYear = "1999";
const graduationYearInt = parseInt(graduationYear);

//Task d: Write a function to multiply a*b

function multiply(a, b) {
    return (a * b);
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(){
const yourAge = parseInt(prompt("How old are you?"));
const dogAge = yourAge * 7;
alert(`That's ${dogAge} years old in dog years!`);
return dogAge;
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

let food = 1;
function foodFunc (age, weight){
    if (age < 1/6) (food = null);
    else if  (age < 1/3 ) (food = weight * 0.1);
    else if  (age < 7/12) (food = weight * 0.05);
    else if (age < 1) (food = weight * 0.04);
    else if (weight < 5) (food = weight * 0.05);
    else if (weight < 10) (food = weight * 0.04);
    else if (weight < 15) (food = weight * 0.03);
    else food= weight * 0.02;
    console.log(`Feed that pupper ${food} pounds of food each day.`);
    return food;
}

foodFunc(1,15);  //  15*.02 = 0.3  //=====Assignment wrong =====//



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) +1);}

function rps() {
    userEntry = prompt("Choose Your Weapon.  Rock (r), Paper (p), or Scissors (s)", " ");
    if (typeof userEntry !== "string"){let userEntry = "z";}
    let userLetter = userEntry[0].toLowerCase();
    let botChoice = getRandomInt(3);
    let userChoice = 0;
    if (userLetter !== 'r' && userLetter !== 'p' && userLetter !== 's' ) {
        alert('That was not a valid choice.  Is this your first time?');}
        else if (userLetter === "r") {userChoice = 1;}
        else if (userLetter === "p") {userChoice = 2;}
        else if (userLetter === "s") {userChoice = 3;}
        else if (userLetter === "z") {userChoice = 0;}
        else alert("I got confused, let\'s try again.");
        if (userChoice === 0){console.log("No Choice, this will be easy");}
        if ((userChoice === 1 && botChoice === 3)  ||  (userChoice === 2 && botChoice === 1)  ||  (userChoice === 3 && botChoice ===2)) {
        alert ("You Win!!  Congratulations.  *grumble grumble*  I wasn\'t ready yet though, next time I\'ll get you.");return "win";}
        else if ((userChoice === 1 && botChoice === 2)  ||  (userChoice === 2 && botChoice === 3)  ||  (userChoice === 3 && botChoice === 1) || (userChoice === 0)) {
            alert ("HA HA HA Loser, I WIN!! At least I\'m a good sport about it and don\'t rub it in your Loser FACE!");return "lose";}
        else {alert("Wait, what, a tie?  That can\'t be right, you made me pick the wrong one, you dirty cheater!");return "tie";}
        }

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMi() {
const km = prompt("How many kilometers?");
let miles  = 0.621371 * km;
alert (miles.toFixed(2) + " miles!");
return miles;
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function ftToCm(){
const feet = prompt("How many feet?");
const cent  = 30.48 * feet;
alert (cent.toFixed(2) + " centimeters!");
return cent;
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong (beer) {
    for (i = beer; i > 0 ; i--){
        if (i !== 1) { console.log(`${i} bottles of beer on the wall, ${i} bottles of beeeer. Ya take one down, pass it around, ${i - 1} bottles of beer on the wall.`);}
            else {console.log(`${i} last bottle of beer on the wall, ${i} final bottle of beeeeeeeeer. Ya take it down, and pass it around, nooooooo mooore bottles of beer on thewall.`);}}
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

const mark = Math.round(Math.random() * 100 + 0.5);

    if (mark >= 90) {grade = 'A';
        console.log(`With a mark of ${mark.toFixed(2)}% you were awarded with a grade of ${grade} for an Awesome Job!  I'm a computer and I'm not even THAT smart`);}
            else if ( mark >= 80) {let grade = 'B';
                console.log(`With a mark of ${mark.toFixed(2)}% you were given a grade of ${grade} for "Big things in your future," keep up the good work!`);}
            else if ( mark >= 70) {let grade = 'C';
                console.log(`With a mark of ${mark.toFixed(2)}% you recieved a grade of ${grade} for, "Clawing by won't get you ahead in life, let's try harder."`);}
            else if (mark >= 60) {let grade = 'D';
                console.log(`With a mark of ${mark.toFixed(2)}% you squeaked it out with a grade of ${grade} for "Don't pretend like you even tried, you can do better`);}
            else if (mark >= 50) {let grade = 'F';
                console.log(`With a mark of ${mark.toFixed(2)}% you got a big red ${grade} for FAILURE!  Better get it together, unless you like flipping burgers`);}
            else if (mark >= 25) {let grade = 'U';
                console.log(`UNACCEPTABLE!! that's what a ${mark.toFixed(2)}%  "U" mark is. "U Disappoint Everyone" is more like it.  Hey, I think I hear your fryer alarm beeping.`);}
                    else
                        console.log(`Oh it's you again, I just gave you all my change yesterday, not ${mark.toFixed(2)}% of it. No, I don't have any Sudafed and if you keep coming around here I'm calling the Cops.`);



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

function findVowels(){
const wordInQuestion = prompt("Enter a word.")
let vowels = 0;
for (let i = 0; i < wordInQuestion.length; i++){
    if (wordInQuestion[i].toLowerCase() === "a" || wordInQuestion[i].toLowerCase() === "e" || wordInQuestion[i].toLowerCase() === "i" || wordInQuestion[i].toLowerCase() === "o" || wordInQuestion[i].toLowerCase() === "u"){
        vowels++;}
    }
alert(`${vowels} vowels in ${wordInQuestion}`);
}

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


//  i already did it that way
