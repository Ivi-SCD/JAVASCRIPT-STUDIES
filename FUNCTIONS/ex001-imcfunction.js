/* 
- NOW USING FUNCTIONS -
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

function calculateImc(weight, height) {
    return weight / Math.pow(height, 2);
}

function classificateImc(imc) {
    if (imc < 18.5) {
        return 'Below weight.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Nice weight.';
    } else if (imc >= 25 && imc < 30) {
        return 'Above weight.';
    } else if (imc >= 30 && imc < 40) {
        return 'Obese.';
    } else {
        return 'Severe obesity.';
    }
}

// Main
(function () {
    const weight = 57.25;
    const height = 1.81;
    
    const imc = calculateImc(weight, height);
    console.log(classificateImc(imc));
})();