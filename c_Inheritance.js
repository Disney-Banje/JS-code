//INHERITANCE

//superclass of Professor and student.
class Person { 
    //properties
    name;

    // constructor
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hello, I'm ${this.name}`);
    }
}


//Professor subclass
class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    grade(paper) {
        // code goes here
    }

    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`);
    }
}

//Student subclass
class Student extends Person {
    year;

    constructor(name, year) {
        super(name);
        this.year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} adn I'm in the ${this.year} year.`);
    }
}