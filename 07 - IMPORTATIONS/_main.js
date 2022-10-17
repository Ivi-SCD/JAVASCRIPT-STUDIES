/* 
**Destructing object**
const person {
    name: 'Ivisson'
}

const { name } = person;
^^^^ Is the same that 

const name = person.name;
*/

const {gets, print} = require('./_auxiliaryfunctions')

print(gets());