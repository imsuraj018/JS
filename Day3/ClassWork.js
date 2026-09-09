let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

for (let i = 0; i < days.length; i++) {
    if (i === 5 || i === 6) {
        console.log(days[i] + " - WEEKEND");
    }
    else {
        console.log(days[i]);
    }
}

const colors = new Set(["Red", "Green", "Blue", "Yellow", "Orange", "Red"]);
for (let color of colors) {
    console.log(color);
}

//Prime Numbers between 1 to 100
let x = 100;
let y = 0;
for(let i = 2; i <= x; i++){
    let isPrime = true;
    for(let j = 2; j < i;j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        y++;
    }
}


// Daywise conditional statements
console.log("Number of prime numbers between 1 and " + x + ": " + y);

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

switch (daysOfWeek[6]) {
    case "Monday":
    case "Wednesday":
    case "Friday":
        console.log("Today is LearnFinacle lecture"); 
         break;

    case "Tuesday":
    case "Thursday":
        console.log("No lecture today");
        break;
    default:
        console.log("It's weekend");
}


let isPaymentDone = false;

for (let i = 1; i <= 3; i++) {
    console.log("Payment attempt:", i);

    isPaymentDone = false;

    if (isPaymentDone) {
        console.log("Payment successful");
        break;
    } else {
        console.log("Payment failed");
    }

    if (i === 3) {
        console.log("Payment failed after 3 attempts");
    }
}

let responses = ["Yes", "No", "Maybe", "Yes", "No"];
for (let i = 0; i < responses.length; i++) {
    if (responses[i] === "Yes") {
        console.log("Response is Positive");
    }

}