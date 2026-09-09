// function without parameters
function greeting(){

    console.log("Hello World");
}

greeting();

// function with parameters
function greeting1(name){
    console.log("Hello " + name + ", What's up?");
}

let name = ["Rambhau", "Rahul", "Ramesh", "Suresh"];
greeting1(name); // here it gives the whole array as output


// global and local variables
let x = 10; // global variable
let c = 10;
function sum(a, b){
    if(a, b > 0){
    let c = 40;
    console.log(" c: " + c); // double printing of c takes place here because we have local variable c and global variable c. So it will print local variable c first and then global variable c.
    return a + b + c + x;
}

}
sum(10, 20); // here it will not print anything because we are returing in fuction but not printing it. So we need to print it in console.log
console.log(sum(10, 20));

//function with default parameters

function greeting2(name = "Guest"){
    console.log("Hello " + name + ", Welcome to our website");

}
greeting2(); // here it will print default parameter value because we are not passing any value in function
greeting2("Rambhau"); // here it will print the value which we are passing in function


function mul(a, b){
    return a * b;
}
console.log(mul(10, 20)); 
console.log(mul(10)); // here it will print NaN because we are not passing second parameter in function. So it will take default value as undefined and undefined * 10 = NaN
const result = mul(10, 20, 34, 53);
console.log(result); // here it will print 200 because we are passing more than 2 parameters in function. So it will take first 2 parameters and ignore the rest of the parameters. So it will return 10 * 20 = 200


// we can call the function before its defination called as function haisting
// it not works in arrow function
console.log(mul1(10, 20)); // here it will print 40 because we are calling the function before its defination. So it will take the function from the top of the code and execute it. So it will return 10 + 20 + 10 = 40
// for multiple arguments we can use rest operator (...) in function parameters. It will take all the parameters and return them as an array. So we can use for loop to iterate through the array and multiply all the numbers.
function mul1(...nums){
    let product = 1;
    for(let n of nums){
        product *= n;
    }
    return product;
}
console.log(mul1(10, 20, 30, 40)); // here it will print 240000 because we are passing more than 2 parameters in function. So it will take all the parameters and multiply them. So it will return 10 * 20 * 30 * 40 = 240000


let student = {
    name: "Rambhau",
    age: 25,
    city: "Pune",
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
}
console.log(student.greet()); 
//why undefined is printed here because we are not returning anything in function. So it will return undefined. So we need to return something in function to avoid undefined.
console.log(student); // here it will print the whole object because we are not returning anything in function. So it will return undefined. So we need to return something in function to avoid undefined.



//arrow function not have to maintion return statement and curly braces. It will return the value automatically. So we can use arrow function to make our code more concise and readable.

let sum1=(a, b) => a + b; // here we are using arrow function to return the sum of two numbers. So we don't need to use return keyword and curly braces. It will return the sum of two numbers.
console.log(sum1(10, 20)); // here it will print 30 because we are passing two parameters in function. So it will return the sum of two numbers.

let greet2=(name) => "Hello " + name + ", Welcome to our website"; // here we are using arrow function to return the greeting message. So we don't need to use return keyword and curly braces. It will return the greeting message.
console.log(greet2("Rambhau")); 

let reverseString = (str) => str.split("").reverse().join(""); 
console.log(reverseString("Rambhau")); // here it will print uahbmaR because we are passing a string in function. So it will return the reverse of the string.


function reverseString1(str){
    let str1 = "";
    for(let i = str.length - 1; i >= 0; i--){
        str1 += str[i];
    }
    return str1;
}
console.log(reverseString1("Rambhau")); 