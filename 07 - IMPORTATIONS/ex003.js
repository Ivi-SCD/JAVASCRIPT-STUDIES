/* 
Make a prorgam that receive the number quantities
and your values.
Show all pairs numbers.
*/

const {print} = require('./_auxiliaryfunctions');

const numbersArray = [];
const pairsNumbers = [];
const oddNumbers = [];

for(let i = 0; i < (Math.random()*100).toFixed(0); i++) {
    numbersArray.push((Math.random()*100).toFixed(0));
    if(numbersArray[i]%2 === 0) {
        pairsNumbers.push(numbersArray[i]);
    } else {
        oddNumbers.push(numbersArray[i]);
    }
}
print("\nPairs Numbers: ")
pairsNumbers.forEach(pairNumber => {
    print(pairNumber)
});

print("\nOdd Numbers: ")
oddNumbers.forEach(oddNumber => {
    print(oddNumber)
});