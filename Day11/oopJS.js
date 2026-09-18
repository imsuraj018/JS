
// static keyword removes the dependency of of calling a function with object
// it directly belongs to class

class Student{
    name="Ram";


    constructor(name, course){
        this.name = name;
        this.course = course;
    }
    greet(){
        console.log("Hello " + this.name + " I am in "+this.course);
    }

    study=()=>{
        console.log("Let her go")  // not stored in shared memory
        // i.e it always create it own storage for this function
    }
}

const s1 = new Student("Ram", "CSE");  // overriding takes place here 
//const s2 = new Student()

s1.greet();

s1.study();

const car={
    brand:"Hyundia",
    model:" i20",
    color:" White",

    display:()=>{
        console.log(car.brand+car.model+car.color);
        console.log(this.brand+this.model+this.color); // this keyword cannot be used with arrow function
    }
};
car.display();


const person=new Object();
person.name="Ram";
person.branch="CS";
console.log(person.name+person.branch);

function Mobile(brand, model){
    this.brand=brand;
    this.model=model;
}

const m1 = new Mobile("samsung", "S24");
console.log(m1.brand);


// java supports multiple constructor while javascript doesn't 
