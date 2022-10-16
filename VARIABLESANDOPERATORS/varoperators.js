// Makes a program to calculate the value of a trip

const priceFuel = 5.79;
let fuelPerKm = 10;
let distanceKm = 200;

console.log("Fuel Price: ", priceFuel, " | Distance traveled: ",
 distanceKm, " | Km/L: ", fuelPerKm);

console.log("The value total of this travel is: ", 
(distanceKm/fuelPerKm)*priceFuel);