// find the eb bill amount based on the task requiremnet
let unite = 280;
let billAmount = 0;
let discount = 0;
let final_billAmount = 0;

console.log("Finding the eb bill amount");

if (unite <= 100) {
    billAmount = (unite * 1.5);
    console.log("unites: ", unite);
    console.log("Bill before discount:", billAmount);
    console.log("Discount:", discount);
    console.log("Final bill amount: ", billAmount);
}

else if (unite <= 200) {
    billAmount = (unite * 2.5);
    console.log("unites: ", unite);
    console.log("Bill before discount:", billAmount);
    console.log("Discount:", discount);
    console.log("Final bill amount: ", billAmount);
}

else if (unite <= 300) {
    billAmount = (unite * 4);


    if (billAmount > 1000) {
        discount = billAmount * 0.10;
        final_billAmount = billAmount - discount;
        console.log("unites: ", unite);
        console.log("Bill before discount:", billAmount);
        console.log("Discount:", discount);
        console.log("Final bill amount: ", final_billAmount);

    }
    else {
        console.log("unites: ", unite);
        console.log("Bill before discount:", billAmount);
        console.log("Discount:", discount);
        console.log("Final bill amount: ", billAmount);
    }
}

else {
    billAmount = (unite * 6);
    if (billAmount > 1000) {
        discount = billAmount * 0.10
        final_billAmount = billAmount - discount;
        console.log("unites: ", unite);
        console.log("Bill before discount:", billAmount);
        console.log("Discount:", discount);
        console.log("Final bill amount: ", final_billAmount);
    }
    else {
        console.log("unites: ", unite);
        console.log("Bill before discount:", billAmount);
        console.log("Discount:", discount);
        console.log("Final bill amount: ", billAmount);
    }
}

// Employee Bonus Eligibility

let salary = 16300;
let experience = 3;
let rating = 4.42;
let bonus = 0;
let bonusAmount = 0;
let finalSalary = 0;

console.log("Finding the bonus Amount");
if (experience >= 5 && rating >= 4) {
    bonus = 20 / 100;
    bonusAmount = salary * bonus;
    finalSalary = salary + bonusAmount;

}
else if (experience >= 3 && rating >= 3) {
    bonus = 10 / 100;
    bonusAmount = salary * bonus;
    finalSalary = salary + bonusAmount;


}
else if (experience < 3 && rating >= 4.5) {
    bonus = 5 / 100;
    bonusAmount = salary * bonus;
    finalSalary = salary + bonusAmount;


}
else {
    bonus = 0 / 100;
    bonusAmount = salary * bonus;
    finalSalary = salary + bonusAmount;

}

console.log("Salary:", salary);
console.log("Experience: ", experience);
console.log("Rating: ", rating);
console.log("Bonus: ", bonus);
console.log("Bonus Amount: ", bonusAmount);
console.log("Final Salary: ", finalSalary);