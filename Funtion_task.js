/*
Function:
1.Create an arrow function add(a, b) → return sum
2.Create multiply(a, b) → return product
3.Create square(n) → return square
4.Create cube(n) → return cube
5.areaRectangle(l, w) → return area
6.perimeterRectangle(l, w) → return perimeter
7.simpleInterest(p, r, t) → return (prt)/100
8. Create a function:

    *Function name: calculateTotal
    *Parameters: m1, m2, m3, m4, m5 (marks of 5 subjects)
    *The function should return the total sum of all 5 marks
    *Use an arrow function
    *Call the calculateTotal function 10 times, once for each student
    *Store each student’s total in separate variables
    *Print all the totals
    */

//  1. return sum of a, b

console.log("SUM OF A AND B");
let sum = (a, b) => { return "The sum of a and b : " + (a + b) };
console.log(sum(2, 5));

console.log("MULTIPLY OF X AND Y");
// 2.Create multiply(x, y) → return product

let multiply = (x, y) => { return "The x and y multiply value is " + x * y };
console.log(multiply(6, 7));

// 3.Create square(n) → return square

console.log("THE SQUARE VALUE OF 'N'");

let square = n => { return "The square values of n " + n * n };
console.log(square(100));

// 4.Create cube(n) → return cube

console.log("THE CUBE OF 'D'");

let cube = d => { return "the cube value of d : " + d * d * d };
console.log(cube(4));

// 5. areaRectangle(l, w) → return area

console.log("CALCULATE AREA RECTANGLE USING LENTH AND WIDTH");

let areaRectangle = (length, width) => { return "area rectangle :" + length * width };
console.log(areaRectangle(100, 60));


// 6. perimeterRectangle(l, w) → return perimeter

console.log("CALCULATE THE PERIMETER RECTANGLE");

let perimeterRectangle = (length, width) => { return "The perimeter rectangle :" + 2 * (length + width) };

console.log(perimeterRectangle(10, 5));

// 7.simpleInterest(p, r, t) → return (prt)/100

console.log("CALCULATE THE SIMPLE INTEREST ");

let simpleInterest = (totalamount, rateofinterst, totalDurationInYears) => { return "calculate simple interest : " + (totalamount * rateofinterst * totalDurationInYears) / 100 };
console.log(simpleInterest(100000, 6, 5));


// 8. Total mark of 10 students


let calculateTotal = (Tamil, English, Maths, Science, Social_Science) => {
    TotalMarks = Tamil + English + Maths + Science + Social_Science; console.log("Total Marks :", TotalMarks);
    return "Percentage of Total Marks :" + " " + TotalMarks / 5 + "%";
}

let Student1 = console.log("Student1: " + calculateTotal(77, 66, 88, 55, 99));
let Student2 = console.log("Student2: " + calculateTotal(86, 22, 33, 45, 92));
let Student3 = console.log("Student3: " + calculateTotal(86, 92, 98, 45, 92));
let Student4 = console.log("Student4: " + calculateTotal(86, 45, 13, 45, 92));
let Student5 = console.log("Student5: " + calculateTotal(86, 82, 9, 45, 92));
let Student6 = console.log("Student6: " + calculateTotal(86, 87, 55, 45, 92));
let Student7 = console.log("Student7: " + calculateTotal(86, 12, 77, 45, 92));
let Student8 = console.log("Student8: " + calculateTotal(86, 97, 13, 45, 92));
let Student9 = console.log("Student9: " + calculateTotal(86, 50, 79, 45, 92));
let Student10 = console.log("Student10: " + calculateTotal(86, 33, 46, 45, 92));



