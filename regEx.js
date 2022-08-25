const str = "I love JavaScript";
const pattern = /love/;
const result = pattern.test(str);
console.log(result);

const newSearch = "This is my world";
const newPattern = /world/g;
const resltTest = newPattern.test(newSearch);
console.log(resltTest);
console.log(newSearch.match(newPattern));

const salaryStatement =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const myPattern = /\d{4}/g;
const result2 = salaryStatement.match(myPattern);
const resultN = result2.map(Number);
const totalIncome = resultN[0] * 12 + resultN[1] + resultN[2] * 12;
console.log(totalIncome);

const question1 =
  "The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";

const myPattern1 = /-?\d+/g;
console.log(
  question1
    .match(myPattern1)
    .map(Number)
    .sort((a, b) => a - b)
);

const pattern2 = /[a].+/g; // . any character, + any character one or more times
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern2);

console.log(matches); // ['and banana are fruits']

// Write a pattern which identify if a string is a valid JavaScript variable

// const is_valid_variable = x => {
//     if x.match(pattern3) {
//         console.log('Valid Case');
//     }else{
//         console.log('Invalid Case')
//     }
// }
// console.log(pattern3.test("_aseSensitive"));

for (i = 0; i <= 8; i++) {
  console.log("#".repeat(i));
}

for (i = 0; i <= 8; i++) {
  console.log("*".repeat(8));
}
const pattern3 = /_?[a-zA-Z0-9_?]+-?/g;
const is_valid_variable = (x) => {
  console.log(`The variable ${x} is ${pattern3.test(x)}`);
};
is_valid_variable("first-name");

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const bb = paragraph.split("/\b/");
// console.log(bb);
// console.warn("This is a warning");
// console.warn(
//   "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
// );
// console.warn("Warning is different from error");

// console.error("This is an error message");
// console.error("We all make mistakes");

const arrx = [];
const x = [1, 6, 9, 3, 1, 6];
for (i = 0; i < x.length - 1; i++) {
  arrx.push(x[i + 1] - x[i]);
}
console.log(arrx);
console.error("This is an error message");
console.warn("We all make mistakes");

const names = ["", "Asabeneh", "Brook", "David", "John"];
console.table(names);

const user = [
  "",
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
];
console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.info("30 Days Of JavaScript challenge is trending on Github");

console.assert(3 === 4, "3 is not greater than 4");

const names1 = ["Asabeneh", "Brook", "David", "John"];

const countries1 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user1 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};

const users1 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names1);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user1);
console.log(users1);
console.groupEnd();

// console.clear();

// alert(prompt("What is your name?").toUpperCase(0, 1));

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
for (const key in person) {
  console.log(key, person[key]);
}

function BellBoy(name, age, sex, country) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.country = country;
}
var bellBoy1 = new BellBoy("Hassan", 15, "Male", "Nigeria");
var bellBoy2 = new BellBoy("");

switch (key) {
  case value:
    break;

  default:
    break;
}
