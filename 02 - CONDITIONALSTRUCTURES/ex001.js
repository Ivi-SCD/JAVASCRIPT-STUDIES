/*Makes a program tu calculate the value of a travel
    You will have five variables:
    1- Price of ethanol;
    2- Price of petrol;
    3- Type fuel of car;
    4- km/l;
    5- Distance in km;

    Show in the console the value that will spent
    in the travel
*/

const ethanolPrice = 5.79;
const petrolPrice = 6.66;

let typeFuel = "ethanol";

let kmPerLiter = 10;
let distanceKm = 100;

if(typeFuel === "ethanol") {
    console.log("\nThe total value of the travel is: ", 
    ((distanceKm/kmPerLiter)*ethanolPrice).toFixed(2), "\n");
} else {
    console.log("\nThe total value of the travel is: ",
    ((distanceKm/kmPerLiter)*petrolPrice).toFixed(2), "\n");
}