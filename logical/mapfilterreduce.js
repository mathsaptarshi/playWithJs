
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get only even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // The test: is the number divisible by 2 with no remainder?
});

console.log("Original numbers:", numbers);     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Even numbers:", evenNumbers);     // [2, 4, 6, 8, 10]

// --- Another example: Filtering fruits longer than 5 characters ---
const fruits = ["apple", "banana", "kiwi", "grape", "orange", "pear"];

const longFruits = fruits.filter(fruit => fruit.length > 5); // Using arrow function for conciseness

console.log("Original fruits:", fruits);       // ["apple", "banana", "kiwi", "grape", "orange", "pear"]
console.log("Long fruits:", longFruits);       // ["banana", "orange"]

// ---------------------------------------------MAP----------------------------------------------
const numbersA = [1, 2, 3, 4, 5];

// Using map to double each number
const doubledNumbers = numbersA.map(function(number) {
  return number * 2; // The transformation: return the number multiplied by 2
});

console.log("Original numbers:", numbersA);      // [1, 2, 3, 4, 5]
console.log("Doubled numbers:", doubledNumbers); // [2, 4, 6, 8, 10]

// --- Another example: Extracting names from an array of objects ---
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 }
];

const userNames = users.map(user => user.name); // Get just the name property

console.log("Original users:", users);
/*
[
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 24 },
  { id: 3, name: 'Charlie', age: 35 }
]
*/
console.log("User names:", userNames); // ["Alice", "Bob", "Charlie"]

// ---------------------------------------------Reduce----------------------------------------------

const numbersR = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers
const sum = numbersR.reduce(function(accumulator, currentValue) {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  return accumulator + currentValue; // The operation: add current value to accumulator
}, 0); // Initial value of accumulator is 0

console.log("Original numbers:", numbers); // [1, 2, 3, 4, 5]
console.log("Sum of numbers:", sum);       // 15

/*
Console output during reduction:
Accumulator: 0, Current Value: 1  (0 + 1 = 1)
Accumulator: 1, Current Value: 2  (1 + 2 = 3)
Accumulator: 3, Current Value: 3  (3 + 3 = 6)
Accumulator: 6, Current Value: 4  (6 + 4 = 10)
Accumulator: 10, Current Value: 5 (10 + 5 = 15)
*/

// --- Another example: Counting occurrences of characters in a string ---
const text = "hello world";
const charCounts = text.split('').reduce((counts, char) => {
  counts[char] = (counts[char] || 0) + 1; // Increment count for the character
  return counts;
}, {}); // Start with an empty object as the initial accumulator

console.log("Text:", text);
console.log("Character counts:", charCounts); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }