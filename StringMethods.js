// String Method:

let home = "My house located in Madurai";

console.log(home[3]);       // how to find a character using intex

console.log(home.at(-4));   // how to find a character using negative intex

console.log("Find the variable length");
console.log(home.length);   // how to find the string length

console.log("Convert to upper case in the variable");
console.log(home.toUpperCase());    // how to print the string values to caps in all character

console.log("print the variable");
console.log(home);   // how to print the string

console.log("Convert to the variable in lower case");
console.log(home.toLowerCase());    // how to print the whole string values as a small character

console.log("Find the index value, using the keyword 'indexOf'");
console.log(home.indexOf('a'));     // find the index of the string (checking with left to right)

console.log("find the index value in left to right");
console.log(home.lastIndexOf("a")); // find the index of the string (checking with right to left)

console.log("Find the variable values starts with, it's return true or false")
console.log(home.startsWith("y"));

console.log("Find the variable values ends with, it's return true or false");
console.log(home.endsWith("ai"));

console.log("return the charecter in the given index");
console.log(home.charAt("10"));  // the charAt and using intex both are same but if the given intex is not available in the string charAt return a empty string, and the intex method return undefined


let area = "  kamarajar salai        ";

console.log("remove the space in front and back");
console.log(area.trim());

console.log("remove the space in front");
console.log(area.trimStart());

console.log("remove the space in back");
console.log(area.trimEnd());

console.log("replace the first given value");
console.log(area.replace("k", "K"));

console.log("replace the all values in the variable")
console.log(area.replaceAll("a", "#"));

let income = "Working, business, training,";

console.log(income);

console.log("Convert string values to arrays value. if didn't give any saparetor then saparet hole string to a array");
console.log(income.split());

console.log("Convert string values to arrays value. if give only '' then sapatet every characters");
console.log(income.split(""));

console.log("Convert string values to arrays value, if we give the saparator then it saparate using the saparator");
console.log(income.split(","));

let splited_income = ["Splited", "earnings", "Income"];
console.log(splited_income);

console.log("Convert array values to string values");
console.log(splited_income.join());

console.log(splited_income.join(", "));

console.log(splited_income.join("ppppp"));

console.log("Slice Method");
let Str = "Today class is good";

console.log(Str.slice(0, 97));
console.log(Str.slice(6));
console.log(Str.slice(4, -3));
console.log(Str.slice(-111, -115));
console.log(Str.slice(4, 1)); // it's not support the higher to lower, so did not print the values and not give an error message only return empty string

console.log("Substring Methods");
let name = "Praveen Kumar";
console.log(name.substring(0, 9));
console.log(name.substring(8, 5)); //it's support the higher to lower index values. it should be print. it will swap the values when start>end
console.log(name.substring(-5, 9)); // the negative values consider as "0".







