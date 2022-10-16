/* 
Make a class that have the attributes:
- name
- age
- birthyear

with constructor with no birthyear, and a only
method "description" tha will show in console they name and age!

And create other function in out the class, 
that compares two age people.
*/

class Person {
    name;
    age;
    birthyear;


    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.birthyear = 2022 - age;
    }

    description() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

function comparePeople(personOne, personTwo) {
    if(personOne.age > personTwo.age) {
        console.log(`${personOne.name} is older than ${personTwo.name}.`);
    } else if (personTwo.age > personOne.age) {
        console.log(`${personTwo.name} is older than ${personOne.name}.`);
    } else {
        console.log(`${personOne.name} and ${personTwo.name} have same age.`)
    }
}

const person_one = new Person('Ivi', 18);
const person_two = new Person('Lucas', 20);

comparePeople(person_one, person_two);