// if condition [find the leap year]

let year = 1904;

if (year % 400 == 0) {
    console.log("This is the leap year");
}
else if (year % 100 == 0) {
    console.log("This is not a leap year");
}
else if (year % 4 == 0) {
    console.log("This is the leap year");
}
else {
    console.log("This is not a leap year");
}

// find the eligibility of voter and candited age

let age = 22;

if (age >= 22) {
    console.log("He/She is eligibile for vote and canditate");
}

else if (age >= 18) {
    console.log("They are only eligibile of vote, not eligible of canditate");
}

else {
    console.log("They are not eligible for vote and canditate");
}


