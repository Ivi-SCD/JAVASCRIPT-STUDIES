const notes = [];

notes.push(10);
notes.push(10);
notes.push(10);

let sum = 0;

for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    sum = sum + note;
}

const average = sum / notes.length;
console.log(average);

//Declare an array 
const names = ["Lucas", "Guilhas"];
console.log("\nLista :", names);

//Insert element on array
names.push("Ivisson", "Joao");
console.log("\nLista :", names);

//Delete the last element on array
names.pop();
console.log("\nLista :", names);

//Delete the first element on array
names.shift();
console.log("\nLista :", names);