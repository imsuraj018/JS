let a= 10;
let b = 120;
console.log(typeof a);
console.log(typeof b);

let empId = 101;
console.log(typeof empId);

const empName = "SK";
console.log(typeof empName);

let city = "Bangalore";
console.log(typeof city);

console.log(`My name is ${empName} and I am from ${city}`);

let isActive = true;
console.log(typeof isActive);
let emp_obj;
console.log(typeof emp_obj);

var placeToVisit = null;
console.log(typeof placeToVisit);

let x = 1;
x = "SSRG";
console.log(typeof x);

let user = {
    empname: "es",
    age: 30
};

console.log(typeof user);
console.log("Employee name is :", user.empname);
console.log("Employee age is :", user.age);


//Activity
// Access the object properties using dot notation and bracket notation

//mysmartPhone(name, model, price) ;

let mysmartPhone = {
    name: "Samsung",
    model: "Galaxy S24",
    platform: "Android",
    price: 79900
};
console.log("Smartphone name is :", mysmartPhone.name);
console.log("Smartphone model is :", mysmartPhone["model"]);
console.log("Smartphone platform is :", mysmartPhone["platform"]);
console.log("Smartphone price is :", mysmartPhone.price);