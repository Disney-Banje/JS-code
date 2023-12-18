// Studen class

class Student {
    //properties
    name;
    year;

    //constructor
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // methods
    introduceSelf() {
        console.log(`My name is ${this.name} adn I'm in the ${this.year} year.`);
    }
}