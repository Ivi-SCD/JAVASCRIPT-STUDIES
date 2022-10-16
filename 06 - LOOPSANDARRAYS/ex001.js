//Make a program that show table of a number

const tableNum = [];

let number = (Math.random()*10).toFixed(0);
for (let i = 0; i < 10; i++) {
    tableNum.push(number*(i+1));
}

console.log(`Table of ${number}: `, tableNum);