// setTimeout method

console.log("setTimeout method");

function payprocess() {
    console.log("Payment processing");
}

function paysuccess() {
    console.log("Payment successfull");
}

function placedOrder() {
    console.log("Order placed");
}

console.log("prodect selected");
setTimeout(payprocess, 2000);
setTimeout(paysuccess, 3000);
setTimeout(placedOrder, 5000);