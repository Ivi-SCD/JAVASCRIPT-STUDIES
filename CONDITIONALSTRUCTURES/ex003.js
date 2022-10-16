/* 
Make a algorithm that show your condition
agreed IMC

IMC = weight / (height * height)

Conditions:
- Less 18.5, below the weight
- Between 18.5 and 25, nice weight
- Between 25 and 30, above the weight
- Between 30 and 40, obese;
- Below 40, severe obesity;
*/

const weightPerson = 57.35;
const heightPerson = 1.81;

const imc = weightPerson/(Math.pow(1.81, 2));

if(imc < 18.5) {
    console.log("\n Below the weight. Your IMC: ", imc.toFixed(2), "\n");
} else if (imc >= 18.5 && imc < 25) {
    console.log("\n Nice weight. Your IMC: ", imc.toFixed(2), "\n");
} else if(imc <= 25 && imc < 30) {
    console.log("\n Above the weight. Your IMC: ", imc.toFixed(2), "\n");
} else if(imc <= 30 && imc <= 40) {
    console.log("\n Obese. Your IMC: ", imc.toFixed(2), "\n");
} else if(imc > 40) {
    console.log("\n Severe Obesity.Your IMC: ", imc.toFixed(2), "\n");
}