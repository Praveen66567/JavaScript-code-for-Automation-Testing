// push 
console.log('PUSH METHOD');
let name = ["praveen", "kumar"];
name.push("a b");
console.log(name);

// pop 
console.log('POP METHOD');
let age = [23, 26, 31];
age.pop();
console.log(age);

// shift
console.log('SHIFT METHOD');
let experience = ["DLF", "SIPCOT"];
experience.shift();
console.log(experience);

// unshift
console.log('UNSHIFT METHOD');
let friends = ["prabhakaran", "sanjay", "vignesh"];
friends.unshift("gopi", "arun");
console.log(friends);
console.log(friends.unshift("sangari"));

// splice 

console.log('SPLICE METHOD');
let requireSkills = ["playwright", "javascript", "api", "nothing"];
requireSkills.splice(3, 1, "ci and cd");   // Replace: The (3[whick we need to start], 1[Number of values delete],ci and cd[And what should be add])
console.log(requireSkills);
requireSkills.splice(2, 1);      // Delete the element in the array format(2[where should be start],1[how many should be delete])
console.log(requireSkills);
requireSkills.splice(2, 0, "api");  // adding a new value in a array
console.log(requireSkills);
requireSkills.splice(0);
console.log(requireSkills);

// sort
console.log('SORT METHOD');
let number = [1, 2, 3, 14, 76, 45, 90, 19];
number.sort();
console.log(number);
number.sort((x, y) => x - y);  // Ascending (small to big) 
console.log(number);
number.sort((i, j) => j - i);  // Descending (big to small)
console.log(number);

// reverse
console.log("REVERSE METHOD");
let dataType = ['string', 'float', 'boolean'];
console.log(dataType);
dataType.reverse();
console.log(dataType);

// filter
console.log("FILTER METHOD");
console.log(number.filter((num) => 14 <= num));

// map
console.log("MAP METHOD");
let TableOf8 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(TableOf8.map((num) => num * 8));

// reduce
console.log("REDUCE METHOD");
let price = [500, 700, 30, 50, 120, 840, 301];

let Total = price.reduce(function (sum, value) { return sum / value }, 1);   // ((accumulator, currentValue) => {accumulator+currentValue;}, InitialValue)
console.log(Total);

// concat
console.log("CONCAT METHOD");

let Myname = "Praveen Kumar";
let greet = "Hi hellow wellcome, My name is " + " " + Myname;
let show = " and this is a very important event at all, and the product price is ";
console.log(greet.concat(show, price));


let Reverse = ['I LOVE JAVASCRIPT'];
// using pre define method

// console.log(Reverse.split("").reverse().join(""));

// using loop method
let stringNmae;

for (let rev of Reverse) {
    stringName = console.log(rev);
}

// New task

// using predefine method
let input = "My Name is Arun";
console.log(input.split("").reverse().join(""));

// Didn't using predefined

let str = "My Name is Arun";
let words = str.split();
let result = [];

for (let word of words) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];

    }
    result.push(reversed);
}
console.log(result);

console.log(result.join());

