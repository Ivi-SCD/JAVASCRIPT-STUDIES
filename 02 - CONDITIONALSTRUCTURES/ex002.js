/* 
    Make a program that calculate the average school

    Classification:
    - Average less then 5, reproof
    - Average between 5 and 7, recuperation
    - Average higher then 7, approved
*/

const noteOne = 7;
const noteTwo = 6;
const noteThree = 8;

const average = (noteOne + noteTwo + noteThree)/3;

if (average >= 5  && average <= 7) {
    console.log("\n Recuperation. Your average: ", average.toFixed(2), "\n");
} else if (average > 7) {
    console.log("\n Approved! Your average: ", average.toFixed(2), "\n")
} else {
    console.log("\n Reproof. Your average: ", average.toFixed(2), "\n")
}