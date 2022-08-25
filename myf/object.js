// let user = {
//   firstname: "Hassan",
//   lastname: "Olowofela",
//   stateofOrigin: "Lagos State",
//   age: "10",
//   maritalSyatus: "Married",

//   info: () => {
//     console.log("Here is your information");
//   },
// };
// user.info();

// // Exercise 1
// // Create an empty object called dog
// // let dog = { }
// // // Print the dog object on the console
// // console.log(dog)

// // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// let dog = {
//   name: "Bingo",
//   legs: 4,
//   color: "brown",
//   age: "4 months",

//   bark() {
//     console.log("woof! Woof!!");
//   },
// };

// // Get name, legs, color, age and bark value from the dog object
// dog.bark();
// // Set new properties the dog object: breed, getDogInfo

// dog.breed = "";

// // const person = {
// //   firstName: 'Asabeneh',
// //   age: 250,
// //   country: 'Finland',
// //   city:'Helsinki',
// //   skills: ['HTML', 'CSS', 'JS'],
// //   title: 'teacher',
// //   address: {
// //     street: 'Heitamienkatu 16',
// //     pobox: 2002,
// //     city: 'Helsinki'
// //   },
// //   getPersonInfo: function() {
// //     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
// //   }
// // }

// //Object methods: Object.assign, Object.keys, Object.values, Object.entries
// // //hasOwnProperty

// // const copyPerson = Object.assign({}, person)
// // console.log(copyPerson)

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// person.nationality = "Ethiopian";
// person.country = "Finland";
// person.title = "teacher";
// person.skills.push("Meteor");
// person.skills.push("SasS");
// person.isMarried = true;

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(", ");
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// //console.log(person)
// console.log(person.getPersonInfo());

// // Count logged in users,count users having greater than equal to 50 points from the following object.
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// console.log(Object.entries(users).filter((user) => user[1].isLoggedIn));
// console.log(Object.entries(users).filter((user) => !user[1].isLoggedIn));
// console.log(Object.values(users).filter((user) => !user.isLoggedIn));
// console.log(Object.entries(users).filter((user) => user[1].points >= 50));

// //  Find people who are MERN stack developer from the users object
// console.log(
//   Object.entries(users).filter((user) =>
//     user[1].hasOwnProperty("MongoDB", "Express", "React", "Node")
//   )
// );

// const personZ = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName}${this.lastName}`;
//   },
//   "phone number": "+3584545454545",
// };
// console.log(personZ.skills);
// console.log(personZ["skills"]);
// personZ["email address"] = "hasb@gmail.com";

// console.log(personZ["email address"]);

// function myLookUp(x) {
//   let result = "";

//   let lookup = {
//     firstName: "Asabeneh",
//     lastName: "Yetayeh",
//     age: 250,
//     country: "Finland",
//     city: "Helsinki",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Node",
//       "MongoDB",
//       "Python",
//       "D3.js",
//     ],
//   };

//   result = lookup[x];

//   return result;
// }

// console.log(myLookUp("age"));

// const mySet = new Set();
// mySet.add("name");
// mySet.add("age");

// console.log(mySet.delete("age"));
// console.log(mySet);

// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const counts = [];
// const count = {};

// const myLang = new Set(languages);
// console.log(myLang);
// for (const i of myLang) {
//   const filteredLang = languages.filter((x) => x === i);
//   counts.push({ lang: i, count: filteredLang.length });
// }

// countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

// console.log(map.get("Sweden"));

// const p = new Promise((accept, reject) => {
//   let a = 10 ** 2;
//   if (a == 100) {
//     accept("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is a plus " + message);
// }).catch((message) => {
//   console, log("Something went wrong" + message);
// });

// const countriesAPI = "https://restcountries.eu/rest/v2/all";
// const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Day 1 exercise
// Write a single line comment which says, comments can make code readable

// Write another single comment which says, Welcome to 30DaysOfJavaScript

/*
Write a multiline comment which says, 
comments can make code readable, 
easy to reuse and informative
*/

