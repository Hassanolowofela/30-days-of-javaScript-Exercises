// Iterate 0 to 10 using for loop, do the same using while and do while loop
const forArray = [];
for (let i = 0; i <= 10; i++) {
  forArray.push(i);
}
console.log(forArray);

const doWhile = [];
let i = 11;
do {
  doWhile.push(i);
  i++;
} while (i <= 20);
console.log(doWhile);

const whileArray = [];
let j = 21;
while (j <= 30) {
  whileArray.push(j);
  j++;
}
console.log(whileArray);
// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let m = 20;
do {
  console.log(m);
  m--;
} while (m >= 10);
// Iterate 0 to n using for loop

// Use for loop to iterate from 0 to 100 and print only even numbers
const evenNum = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNum.push(i);
  }
}
console.log(evenNum);

for (let i = 0; i <= 100; i++) {
  var notPrime = false;
  for (var u = 2; u <= i; u++) {
    if (i % u === 0 && u !== i) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(i);
  }
}

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4, 5, 6));
