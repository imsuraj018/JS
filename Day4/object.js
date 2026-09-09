let fisrtObject = {id : 100, name : "Rahul", age : 30};
console.log("First Object: ", fisrtObject);

let secondobj = {};
console.log("Second Obj", secondobj);


console.log("Dot Notation: ", fisrtObject.age);
console.log("Dot Notation: ", fisrtObject.id);

console.log("Bracket Notation: ", fisrtObject["name"]);

fisrtObject.id = 188;
console.log("New id: ", fisrtObject.id);

let personName = "Rambhau";
let age = 25;
let empObject = {
    empName : personName,
    empAge : age
};

console.log("EmpObj", empObject);


let EmpObj={
    personName,
    age
}

console.log(EmpObj);

let empOne = {
    ename: "Rambhau",
    eId: 1234,
    emailId: "rambhau@gmail.com"

};

console.log("Property values using Object Values", Object.values(empOne));


