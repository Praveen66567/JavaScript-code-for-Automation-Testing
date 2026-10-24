// Operators
// Arithmetic operator

console.log("Arithmetic Operators");
let a = 12;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Comparison Operators

console.log("Comparison Operators");

let c = 8;
let d = "8";

console.log(c == d);
console.log(c === d);
console.log(c != d);
console.log(c < d);
console.log(c > d);
console.log(c <= d);
console.log(c >= d);

// Assignment Operators

console.log("Assignment Operators");

let x = 4;
let y = 9;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x **= y);
console.log(x = y);


// Ternary Operators

console.log("Ternary Operator");

let workFromHome = "0";      // it's true because every " " should be true based on the place

let workingStatus = workFromHome >= true ? "woking" : "Not working";   // if we didn't assign a new veriable, the console was printed the actual result
console.log(workingStatus);


// Logical Operators

console.log("Logical Operator");

console.log(100 > 11 && 100 < 11);    // if the any one condition is false, then the output prints as false like ( 1  1 = 1, 1  0 = 0)
console.log(101 > 100 || 100 < 100);  // if the any one condition is true, then the output prints as true like (1  1 = 1, 1  0 = 1)
console.log(!(88 < 33));              // return nagative values like the result is pasitive, then the output shows as negative (1 = 0, 0 = 1)

// Unary Operator

console.log("Unary Operator");
// increment post and pre
let g = 10;
console.log(g++);
console.log(g);

let h = 100;
console.log(++h);

// decrement in post and pre

let i = 1000;
console.log(i--);
console.log(i);

let j = 10000;
console.log(--j);

// "typeof" Operator

console.log("typeof keyword");

let name = "praveen";
console.log(typeof name);
let ageIs = 23;
console.log(typeof ageIs);
let working = true;
console.log(typeof working);
