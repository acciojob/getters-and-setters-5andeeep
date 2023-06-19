//complete this code
class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set age(newAge){
        this._age = newAge;
    }
}

class Student extends Person {
    study(){
        console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
    teach(){
        console.log(`${this.name} is teaching`)
    }
}

// let student = new Student("Alice", 25);
// student.study();

// let teacher = new Teacher("Mr. Smith", 45);
// teacher.teach();





// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
