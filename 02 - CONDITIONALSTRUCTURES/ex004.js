/*
    Make an algorithm that calculate what have to pay for a product, 
    looking the normal label price and choice the payment condition.

    Use the codes of the tabel below for adequated payment.

    Condition code of payment:
    - Debit: 10% discount
    - PIX or cash: 15% dicount
    - Split in two times: normal label price with no interest
    - Above two times: normal label price with interest rate of 10%
*/

let paymentPrice = 1;
const labelPrice = 100;0;

const paymentCondition = 'Pix';

if (paymentCondition === 'Debit') {
    paymentPrice = labelPrice - labelPrice*0.1;
    console.log("\nTotal value: ", paymentPrice.toFixed(2), "\n");
} else if (paymentCondition === 'Pix' || paymentCondition === 'Cash'){
    paymentPrice = labelPrice - labelPrice*0.15;
    console.log("\nTotal value: ", paymentPrice.toFixed(2), "\n");
} else if (paymentCondition === 'Split in two times') {
    paymentPrice = labelPrice;
    console.log("\nTotal value: ", paymentPrice.toFixed(2), "\n");
} else if (paymentCondition === 'Above two times') {
    paymentPrice = labelPrice - labelPrice*0.1;
    console.log("\nTotal value: ", paymentPrice.toFixed(2), "\n");
}