// callback function
console.log("It's a CallBack function");


function studentResult(name, mark, callback) {
    return callback(name, mark);
}

function checkPass(name, mark) {
    if (mark >= 40) {
        return name + ": " + "pass";
    }
    else {
        return name + ": " + "fail";
    }
}


function checkGrade(name, mark) {
    switch (true) {
        case (mark >= 90):
            return name + ": " + "A";

        case (mark >= 75):
            return name + ": " + "B";

        case (mark >= 60):
            return name + ": " + "C";

        case (mark >= 40):
            return name + ": " + "D";

        case (mark < 40):
            return name + ": " + "E - fail"

    }
}


console.log(studentResult("Praveen", 33, checkPass));
console.log(studentResult("Praveen Kumar", 99, checkPass));
console.log(studentResult("Guru", 88, checkPass));;

console.log(studentResult("Arun", 95, checkGrade));
console.log(studentResult("Ravi", 65, checkGrade));
console.log(studentResult("Kiran", 45, checkGrade));


// CallBack Hell

console.log("callBack hell funtion");

// In simple method

function morning(callbackafternoon) {
    console.log("good morning");
    callbackafternoon();
}

function afternoon(callbackevening) {
    console.log("good afternoon");
    callbackevening();
}

function evening(callbacknight) {
    console.log("good evening");
    callbacknight();
}

function night() {
    console.log("good night");

}


morning(() => {
    afternoon(() => {
        evening((night))
    })
})

// in real time callback hell

// Food delivery started

function orders(callback) {
    console.log("Order placed");
    callback();
}

function acceptOrder(callback) {
    console.log("Restaurant accept the order");
    callback();
}

function preparingOrder(callback) {
    console.log("Food is Being prepared");
    callback();
}

function pickUpOrder(callback) {
    console.log("Delivery partner pick up the order");
    callback();
}

function delivered(callback) {
    console.log("Food delivered successfully");
    callback();
}

// function greet() {
//     console.log("Enjoy your food!");
// }

orders(() => {
    acceptOrder(() => {
        preparingOrder(() => {
            pickUpOrder(() => {
                delivered(() => {
                    console.log("Enjoy your food!");
                });
            });
        });
    });
});