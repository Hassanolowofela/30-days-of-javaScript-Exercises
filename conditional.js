// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

userInput = prompt("Enter your age");
userInput >= 18
  ? console.log("You are old enough to drive")
  : console.log("wait for the number of years he needs to turn 18");

//   Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge1 = 18;
if (myAge1 > userInput) {
  console.log(`I am ${myAge1 - userInput} years older than you`);
} else {
  console.log(`You are ${userInput - myAge1} years older than me`);
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let myInput = parseInt(prompt("Enter a number"));
myInput % 2 == 0
  ? console.log(`${myInput} is an even number`)
  : console.log(`${myInput} is an odd number`);

const fb = [];
// ADD CODE HERE
for (let i = 1; i <= 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  } else if (i % 3 == 0) {
    fb.push("fizz");
  } else if (i % 5 == 0) {
    fb.push("buzz");
  } else {
    fb.push(i);
  }
}
console.log(fb);
