// Non-Primitive data type

// Arrays
console.log("ARRAY CONCEPT");

let name = ['praveen', 'gopi', 'modan'];
console.log(name);

let mixed = ['Gopi', true, 31, null];
//positive intex 0,    1,  2,  3
//negative intex -4   ,-3, -2 , -1
console.log(mixed[3]);
console.log(mixed.at(-4));  // we use .at(), when we call the negative intex
console.log(mixed);

//Object
console.log("OBJECT CONCEPT");

let id = Symbol('id');               // we create a new identifier as a symbol, we can access directly using the below method
let personal_details = {
    name: "praveen",
    role: 'Automation Tester',
    id: 245677,
    [id]: 111111
};

console.log(personal_details);
console.log(personal_details.name);
console.log(personal_details["name"]);
console.log(personal_details.id);
console.log(personal_details[id]);

// Functions

console.log('FUNCTIONS CONCEPT');

