// Professor class 

class Professor {
    // properties
    name;
    teaches;

    // constructor
    constructor(name, teaches) {
        this.name = name;
        this.teaches = teaches;
    }

    // methods
    grade(paper) {
        // code goes here
    }

    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`);
    }
}