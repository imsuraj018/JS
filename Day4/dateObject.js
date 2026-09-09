let today = new Date();
console.log("Today's date is: " + today);

console.log("Time in milliseconds since Unix epoch: " + today.getTime());

console.log(today.getFullYear());
console.log(today.getMonth() + 1); // Month is zero-indexed
console.log(today.getDate());

today.setFullYear(2050);
console.log("Updated year: " + today
);

let now = new Date();
console.log(now.toLocaleDateString());  // print just date
console.log(now.toLocaleTimeString()); // print just time

console.log("Current date and time: " + now.toLocaleString());  // it print both

let d = new Date("2024-01-30");
console.log(d.getMonth() + 2); // Month is zero-indexed
console.log(d.getDate());   // feb 30 print hogya 



let day = now.getDay();
if(day === 3 || day === 6){
    console.log("It's weekend");
}
else{
    console.log("It's a weekday");
}

let date = new Date();
date.setDate(date.getDate() + 5); // Add 5 days to the current date
console.log(date);


date.setDate(date.getDate() - 10);
console.log(date);


let date1 = new Date();
date1.setMonth(date1.getMonth() - 6); // Add 2 months to the current date
console.log(date1 + 12);


const createDate = new Date("2026-08-01");

const expiryDate = new Date(createDate);
expiryDate.setDate(expiryDate.getDate() + 30);

console.log(expiryDate);
if(new Date() > expiryDate){
    console.log("Password Expired");
}
else{
    console.log("Active password");
}