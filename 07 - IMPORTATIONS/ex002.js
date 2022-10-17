/* 
Make a program that receive the number quantities and your values.
Show the biggest value and the smallest number of the array.

Example:
    [4, 100, 150, 90, 200]

Output:
    biggest number: 200
    smallest number: 90
*/

const {print} = require('./_auxiliaryfunctions');

const numbersArray = [];

for(let i = 0; i < (Math.random()*10).toFixed(0); i++) {
    numbersArray.push((Math.random()*100).toFixed(0));
}

let higherNumber = 0;
let smallestNumber = numbersArray[0];

numbersArray.forEach(number => { 
    if(number > higherNumber) {
        higherNumber = number;
    } 
    if (number < smallestNumber) {
        smallestNumber = number;
    }
    if (number === numbersArray[(numbersArray.length)-1]) {
        print(numbersArray);
    }
});

print(`\nThe biggest number is: ${higherNumber}
\nThe smallest number is: ${smallestNumber}`);