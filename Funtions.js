// Function

function greet() {
    console.log("Hi");
    console.log("Hellow");
    console.log("How are you?");
}

console.log(greet()); // In this console print the values and finally shows undefined due to the console already exits in a function. if outer function is not return any values so it's undefined

// parameter function

function math(a, b) {
    console.log(a + b);
}
let student1 = math(70, 30);
let student2 = math(70, 90);
let student3 = math(20, 30);

let allSubjects;      // the global veriable can access in the inner and outer function 

function totalMark(tamil, english, maths) {
    allSubject = (tamil + english + maths);
    console.log("Total Marks =", allSubject);
    return "The total marks in percentage = " + " " + allSubject / 3 + "%";

}
let student1Is = console.log(totalMark(33.98, 95.22, 12.42));
// console.log("Total Marks =", allSubject);

let student2Is = console.log(totalMark(20, 20, 20));
// console.log("Total Marks =", allSubject);


// Change the string value

console.log("change the string values");

let string;

function changeValue() {
    string = "ramesh";

    return string.toUpperCase();

}
console.log(changeValue());
console.log(string);


/* Arrow Function
   Syntax
   1. keyword variable_name = () =>{code}
   2. Keyword variable_name = parameters in without brackets => codes;
*/
console.log("ARROW FUNCTION") // header 

let whichFunction = () => { console.log("This is the 'Arrow Function'") }; // this is the single line arrow function format(mostly use to small or simply codes write this method)
whichFunction();                                                           // if we need to print the function, then we should call

let fullName = whichFunctions => console.log("which Function :", whichFunctions); // this is the single line arrow function format 2 with parameters

fullName("This is a Arrow Function with parameters");                                                  // we need to give the value in inner brackers, when we create parameters function
whichFunction();                                       // In this function print the existing value, not updated values
console.log(typeof fullName);                          // the typeof keyword used to define the datatype


// practice functions
//Calculate the Area of a Rectangle
function area(length, width) {
    let result = length * width;
    return result;
}
console.log(area(8, 5));

// find odd or even number
function isEven(number) {
    return number % 2 == 0;
}
console.log(isEven(300));


