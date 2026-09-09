// Arthematic Operators
let a = 10;
let b = 5;

console.log("Addition of a and b is :", a + b);
console.log("Subtraction of a and b is :", a - b);
console.log("Multiplication of a and b is :", a * b);
console.log("Division of a and b is :", a / b);
console.log("Modulus of a and b is :", a % b);
console.log("Exponentiation of a and b is :", a ** b);

let x = 10;
console.log("Value of x is :", x);
x++;
console.log("Value of x after increment is :", x);
x--;
console.log("Value of x after decrement is :", x);
++x;
console.log("Value of x after pre-increment is :", x);
--x;
console.log("Value of x after pre-decrement is :", x);


let c = 10;
let d = 20; 
console.log(c +=d);
console.log(c -=d);
console.log(c *=d);
console.log(c /=d);
console.log(c %=d);

//Relational Operators
let p = 10;
let q = 20;
console.log("Is p equal to q?", p == q);
console.log("Is p not equal to q?", p != q);
console.log("Is p greater than q?", p > q);
console.log("Is p less than q?", p < q);
console.log("Is p greater than or equal to q?", p >= q);
console.log("Is p less than or equal to q?", p <= q);

//Ternary Operator
let r = 10;
let s = 20;
let result = (r > s) ? "r is greater than s" : "r is less than or equal to s";
console.log(result);


//Equality Operators
let e = 10;
let f = "10";
console.log("Is e equal to f?", e == f); // loose equality
console.log("Is e equal to f?", e === f); // strict equality

const n1 = 10, n2 = "10";
console.log("Is n1 equal to n2?", n1 == n2); // converts the datatypes 
console.log("Is n1 equal to n2?", n1 === n2); // strict to fixed datatypes+value check

const foo = "test";
const bar = "test";
console.log("Is foo equal to bar?", foo == bar);
console.log("Is foo equal to bar?", foo === bar);


const str = "";
console.log(str == false); // empty string is considered as false in loose equality or false = 0 and empty string = 0
console.log(str === false); // strict equality check as one is string and other is boolean 