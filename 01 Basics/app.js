// Logging a simple message to the console
console.log("hello world");

// Declaring a variable
let name1; // Variable declared but not initialized (undefined)
name1 = 5;
console.log(name1);

// Always use 'let' for declaring a variable because it is block scoped 
let number = 55;
console.log(typeof number);

// Declaring and initializing a constant
const pi = 3.14;
console.log(pi);

// Comparison operators
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 > num2); // false
console.log(num1 == num2); // false (only value comparison)
console.log(1 == '1'); // true (loose equality, type coercion occurs)
console.log(num1 <= num2); // true
console.log(num1 >= num2); // false
console.log(num1 === num2); // false (strict equality, type + value comparison)
console.log(1 === '1'); // false (strict equality, no type coercion)
console.log(num1 != num2); // true (loose inequality, only value comparison)
console.log(num1 !== num2); // true (strict inequality, type + value comparison)
console.log(1 !== '1'); // true (strict inequality, no type coercion)

// Basic arithmetic operations
let a = 5;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); 
console.log(a % b); // Modulus: 2 (remainder of division)

// String concatenation
let greeting = "Hello, ";
let name = "Alice";
console.log(greeting + name); // Output: "Hello, Alice"

// Array basics
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: "Apple"
fruits.push("Date"); // Adding an element to the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]


// Basic function
function add(x, y) {
    return x + y;
}
console.log(add(2, 3)); // Output: 5

// Object basics
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
console.log(person.firstName); // Output: "John"
console.log(person["lastName"]); // Output: "Doe"

// Modifying an object property
person.age = 30;
console.log(person.age); // Output: 30

//type conversion

let money = '50';

//convert string to number
// money =parseInt(money);
// can also be done using
money=Number(money) // for number to string money=String(money)

console.log(money)
console.log(typeof money)