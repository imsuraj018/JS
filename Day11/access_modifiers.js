
class Student{
    marks=100;
    #showmarks(){
        console.log(this.marks);
    }
    display(){
        this.#showmarks();
    }
}
const s1=new Student();
s1.display();
s1.marks=120;
console.log(s1.marks); // js not support protected
