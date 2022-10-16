//Show all average that will be in recuperation in a list (average < 5)

const listNotes = [2, 5, 3, 9, 10, 4];

for(let i = 0; i < listNotes.length; i++) {
    if(listNotes[i] < 5) {
        console.log(listNotes[i]);
    }
}