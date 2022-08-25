const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;
let emptyArray = [];
// Declare an array with more than 5 number of elements
let newArray = [1, 2, 3, 4, 5, 6];
// Find the length of your array
console.log(newArray.length);
// Get the first item, the middle item and the last item of the array
console.log(newArray[0]);
console.log(newArray[newArray.length / 2]);
console.log(newArray[newArray.length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
  "Asabeneh",
  250,
  true,
  false,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(companies);
// Print the array using console.log()
// Print the number of companies in the array
console.log(companies.length);

// Print the first company, middle and last company
// Print out each company
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].toUpperCase());
}
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${companies.join(", ")} are big IT companies`);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
console.log(companies.sort());
// Reverse the array using reverse() method
console.log(companies.reverse());
// Slice out the first 3 companies from the array
// console.log(companies.slice(3));
// Slice out the last 3 companies from the array
console.log(companies.slice(3, -3));
// Slice out the middle IT company or companies from the array
console.log(companies.splice((companies.length - 1) / 2, 1));
// Remove the first IT company from the array
console.log(companies.splice(0, 1));
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
console.log(companies.splice(-1, 1));
// Remove all IT companies
console.log(companies.splice());

// // Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ");
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);
// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
for (i = 0; i < countries.length; i++) {
  if (countries.includes("Ethopia")) {
    console.log("ETHOPIA");
  } else {
    countries.push("Ethopia");
  }
}
console.log(countries);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
console.log(ages.sort());
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
