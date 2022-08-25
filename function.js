// Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = (a, b) => {
  let sum = a + b;
  return sum;
};
console.log(addNumbers(3, 7));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const rectangleArea = (l, b) => {
  const area = l * b;
  return area;
};
console.log(rectangleArea(3, 10));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (r) => {
  const area = Math.PI * r ** 2;
  return area;
};
console.log(areaOfCircle(5));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (...args) => {
  let maxNumber = Math.max(...args);
  return maxNumber;
};
console.log(findMax(1, 4, 9, 0, 4));
