// for loop [find the even number in between -45 to -35]

let i = -45;
for (i; i <= -34; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}

// while loop [find the total value of 10 to 30]

let number = 10;
let total = 0;

while (number <= 30) {
    total += number;
    number++
}

console.log(total);

// do while loop 

let value = 100;

do {
    console.log("The values is ", value);
    value++
} while (value <= 99); // if the condition is not satisfied, print the first value

// for in loop -> used to retrive the key values to object

let employee = {
    employeeID: 2682225,
    employeeName: "Praveen Kumar",
    age: 23
}
console.log(employee);

for (let keyAndValues in employee) {
    console.log(keyAndValues + ": " + employee[keyAndValues]);

}

let array = [20, 30, 50, 60]

for (let values in array) {
    console.log(values + ":" + array[values]);     // in this case it will be print only index and values
}



// for of loop -> used to retrive the values
// in array

let arrays = [1, 2, 5, 7, 90, 1000];

for (let value of arrays) {
    console.log(value);
}

// in string

let greet = "hellow";

for (let char of greet) {
    console.log(char);
}
