
let arr = ["praveen", "gopi"];

let number = [10, 20, 30, 40];
// 1.Get the first element of an array. -> pass
console.log(number[0]);

// 2.Get the last element of an array. -> pass
console.log(number[3]);

// 3.Add an element at the beginning of an array. -> pass
number.unshift(5);
console.log(number);

// 4.Add an element at the end of an array. -> pass
number.push(50);
console.log(number);

// 5.Remove the first element from an array. -> pass
number.shift();
console.log(number);

// 6.Remove the last element from an array. -> pass
number.pop();
console.log(number);

// 7.Join all array elements into a string separated by commas. -> pass
let Str = (number.join(","));
console.log(Str);

// 8.Convert a string into an array. -> pass
console.log(Str.split(" "));

// 9.Merge two arrays. -> pass
let conCat = number.concat(arr);
console.log(conCat);

// 10.Reverse an array using built-in methods. -> pass
console.log(conCat.reverse());

// 11.Sort an array in ascending order using built-in methods. -> pass
console.log(conCat.sort((a, b) => a - b));

// 12.Reserve a String 'Hello world'
let code = "hellow world";
console.log(code.split("").reverse().join(""));








