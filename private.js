//ENCAPSULATION.

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

class Student extends Person {
    // private properties
    #year;


    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} adn I'm in the ${this.#year} year.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}


