// Objects

let employee = {
    name: "praveen",
    age: 22,
    department: "manual tester"
}
console.log(employee);

// adding a new key
employee.salary = 49000;
console.log(employee);
employee.bloodGroup = "b" + "+";

// update a key value
employee.age = 23;
console.log(employee);

// delete the key value

console.log(delete employee.bloodGroup);


// new task
console.log(employee.age);
console.log(employee["age"]);

console.log(delete employee.properties);

