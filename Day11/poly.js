class Dog{
    speak(){
        console.log("Dog barking")
 
    }

}
class Cat{
    speak(){
        console.log("Cat Meows")
    }
}

function makesound(animal){
    animal.speak();
}

const dog=new Dog();
const cat=new Cat();

makesound(dog);
makesound(cat);

//runtime poly

class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog1 extends Animal{
    speak(){
        console.log("Dog barks");
    }
}
const dog1=new Dog1();
dog.speak();

//compile time polymorphism is not supported in js directly

class Calculator{
    calculate(a, b){
        return a+b;
    }
    calculate(a, b, c){
        return a+b+c;
    }
}
const c1=new Calculator();
console.log(c1.calculate(1, 2, 3));