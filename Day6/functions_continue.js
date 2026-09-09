// more than one statments in arrow function
let sum1 = (a, b) => {
    let c = 10;
    return a + b + c;
}
console.log(sum1(10, 20));

const person={
    name: "Rambhau",
    age: 20,
    greet: () => {
        console.log("Hello, my name is " + person.name);
    }
};
person.greet();



// Function clouser


function outerfunction(){
    let cnt=0;
    function innerfunction(){
        cnt++;
        console.log(cnt);
    }       
    return innerfunction;
}
const inc = outerfunction();
inc();



inc();// each time cnt is incremented by the property of closure. So it will print 1 and 2 because we are calling the function twice. So it will increment the value of cnt by 1 each time we call the function.


// clousure is a function that has access to the parent scope,
//  even after the parent function has closed. 
// So it will remember the value of cnt even after the outerfunction has closed. 
// So it will print 1 and 2 because we are calling the function twice. So it will increment the value of cnt by 1 each time we call the function.



