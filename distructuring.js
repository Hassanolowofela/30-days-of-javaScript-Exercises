const constants = [2.72, 3.14, 9.81, 37, 100];
const countries3 = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users5 = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
const [fin, est, sw, den, nor] = countries3;
console.log(fin, est, sw, den, nor);

const { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// Iterate through the users array and get all the keys of the object using destructuring
for (const { names, scores, skills, age } of users5) {
  console.log(names, scores, skills, age);
}

// Find the persons who have less than two skills
const filteredItems = users5.filtered((item) => {
  return item.skills.length < 2;
});
console.log(filteredItems);
