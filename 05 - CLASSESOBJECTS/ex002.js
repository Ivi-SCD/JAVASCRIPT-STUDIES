/* 
Make a class to represent people.
For each person we have the attributes name, weight, height
The people must have capacity of saying your IMC value

Instantiate a person called Jonas that have 70kg weight and
1.75m height and request to say your IMC
*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    sayImc() {
        console.log(`\nMy IMC is: ${(this.weight/(Math.pow(this.height, 2))).toFixed(2)}\n`);
    }
}

const person_one = new Person('Jonas', 70, 1.75);
person_one.sayImc();