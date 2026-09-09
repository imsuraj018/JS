class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi, I am ${this.name} and I'm ${this.age} years young`);
    }

}

const result = new Person("Ramesh", 22);
result.greet();


class Employee{
    constructor(empId, empName, empAge){
        this.id = empId;
        this.name = empName;
        this.age = empAge;
    }

    swipeIn(){
        console.log("Employee Id", this.id, " has swipped in at: ", new Date().toLocaleString());
    }

    static code(){
        console.log("Employee is coding...");
    }

}
let empObj = new Employee(100, "Sweta", 32);

console.log("ID: ", empObj.id);
console.log("Name: ", empObj["name"]);
console.log("Age: ", empObj["age"]);

empObj.swipeIn();

Employee.code();


class PartTimeEmployee extends Employee{
    constructor(empId, empName, contractPeriod){
        super(empId,empName);
        this.contractPeriod = contractPeriod;
    }
    swipeIn(){
        console.log("Contract Employee Swipped In");
        super.swipeIn();
    }
}

let empChild = new PartTimeEmployee(101, "Suman", 21);
PartTimeEmployee.code();
empChild.swipeIn();