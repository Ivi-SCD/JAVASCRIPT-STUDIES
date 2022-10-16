//Make a program that make a list with all 
// numbers pairs between 10 and 50

const listPairs = [];

for(let i = 0; i < 50; i++) {
    if(i >= 10 && i%2 == 0) {
        listPairs.push(i);
    }
}

console.log(listPairs);