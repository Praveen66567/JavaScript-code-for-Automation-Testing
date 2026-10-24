/* 
1.let str = "Hello JavaScript World";
  *Check if the string includes "JavaScript" -> pass
  *Find the index of "World" -> pass
  *Find the last index of letter "o" -> pass */

let str = "Hello JavaScript World";

console.log(str.includes("JavaScript"));
console.log(str.indexOf("World"));
console.log(str.endsWith("o"));

/*
2.let str = "FrontendDeveloper";
Extract "Frontend" -> pass
Extract "Developer" -> pass
Extract first 5 characters -> pass
Extract last 5 characters -> pass */

let dev = "FrontendDeveloper";
console.log(dev.slice(0, 8));
console.log(dev.slice(8, 17));
console.log(dev.substring(0, 5));
console.log(dev.substring(12, 17));


/*
3.let str = "apple,banana,orange";
Convert string into array ->pass
Count how many items are there ->pass
Convert back to string using join() -> pass*/

let fruite = "apple,banana,orange";
console.log(fruite.split(","));
console.log(fruite.split(",").length);
let fruite1 = (fruite.split());
console.log(fruite1.join());

