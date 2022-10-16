//Make a program that scroll through numbers of an array
//and show all pairs numbers

const array = [];

const sizeArray = (Math.random()*100).toFixed(0);

for(let i = 0; i < sizeArray; i++) {
    array.push((Math.random()*1000).toFixed(0));
    if(array[i]%2 == 0) {
        console.log(array[i]);
    }
}

console.log("\nComplete Array: ", array)