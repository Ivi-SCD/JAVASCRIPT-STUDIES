//Show the higher value in an array

const listNotes = [2, 7, 3, 9, 10] 

let higherNote = 0;
for(let i = 0; i < listNotes.length; i++) {
    if (listNotes[i] > higherNote) {
        higherNote = listNotes[i];
    }
}

console.log("\nThe higher value of array is: ", higherNote);