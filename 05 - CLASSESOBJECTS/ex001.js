/* 
Make a class to represent cars.
The cars have, brand, color and average fuel km/l

Create a method that with distance in km and fuel price 
give us the value of the price in this percurse
*/

class Car {
    brand;
    color;
    averageKmL;

    constructor(brand, color, averageKmL) {
        this.brand = brand;
        this.color = color;
        this.averageKmL = averageKmL;
    }

    totalTravel(distance, fuelPrice) {
        return (this.averageKmL*distance)/fuelPrice;
    }
}

let car_one = new Car('Mercedes', 'Blue', 5.00);
let car_two = new Car('Mitsubish', 'Red', 10.00);

console.log(`\nThe car: ${car_one.brand} with color ${car_one.color}
 spent ${car_one.totalTravel(200, 5.49).toFixed(2)} to make a travel 
 with 200km distance.\n`);