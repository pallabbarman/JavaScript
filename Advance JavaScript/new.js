class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Hanks', 2000);
console.log(heroPerson);
const friendlyPerson = new Person("Cruise", "Tom", 25000);
console.log(friendlyPerson);