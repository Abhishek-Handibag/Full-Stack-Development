let a=200;
let b=30;

if (b>a){
    console.log("b is greater");
}
else if(a>b){
    console.log("a is greater");
}
else{
    console.log('both are equal');
}


//example
// Checking if a user is eligible for a discount
let isLoggedIn = true;
let cartAmount = 200;
let discount;

if (isLoggedIn) {
    if (cartAmount > 100) {
        discount = "20%";
    } else {
        discount = "10%";
    }
} else {
    discount = "5%";
}
console.log("Your discount is " + discount);
