
let c =54;
if(c > 18){
    console.log("c is eligible to vote");
}
else{
    console.log("c is not eligible to vote");
}

var score = 75;
if(score >= 90){
    console.log("Grade O");
}
else if(score >= 80){
    console.log("Grade A");
}
else{
    console.log("Averge Baccha");
}


// SwitchCase Statement
let day = "Friday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

//Control Statements
let x = 100;
let y = 0;
for(let i = 2; i <= x; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false;

            break;
        }
    }
        if(isPrime){
            y++;
            console.log(i);
        }
}
console.log("Total Prime Numbers between 1 to 100 are : " + y);



const user = {
    name:"SK",
    age: 25,
    role: "Admin"
};

for(let key in user){
    console.log(`${key} : ${user[key]}`);
}

let cart =[
    {item: "Shoes", price: 50},
    {item: "Shirt", price: 30},
    {item: "Pants", price: 40}
];

let totalPrice = 0;
for(let items in cart){
    totalPrice += cart[items].price;
}
console.log("Total Price: " + totalPrice);
    if(totalPrice > 100){
        console.log("You are eligible for discount of 20% and discount amount is: " + totalPrice * 0.2);
    }
    else if (totalPrice > 50){
        console.log("You are eligible for 10% discount and discount amount is: " + totalPrice * 0.1);
    }
    else{
        console.log("You are not eligible for any discount");
    }

