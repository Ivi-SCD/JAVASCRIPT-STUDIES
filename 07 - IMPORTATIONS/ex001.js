/* 
A room contain five people and each people was sorted
with a number between 1 - 100

Make a program that receive the five numbers sorted
for each person and show the higher number sorted

Example [!]
List [random]
5
50
10
98
23

Output:
98
*/

const {print} = require('./_auxiliaryfunctions');

const numbersArray = [];

for(let i = 0; i < (Math.random()*10).toFixed(0); i++) {
    numbersArray.push((Math.random()*100).toFixed(0));
}

let higherNumber = 0;

numbersArray.forEach(number => { 
    if(number > higherNumber) {
        higherNumber = number;
    }

    if (number === numbersArray[(numbersArray.length)-1]) {
        print(numbersArray);
    }
});

print(higherNumber);