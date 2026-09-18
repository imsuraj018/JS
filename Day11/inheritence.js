class Person{

    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("hello"+this.name);
    }
}
class Student extends Person{

    constructor(name, course){
        super(name);
        this.course=course;
    }
    study(){
        console.log("Are you.."+this.course);
    }

}
const s1 = new Student(" Ram");
s1.greet();
s1.study();