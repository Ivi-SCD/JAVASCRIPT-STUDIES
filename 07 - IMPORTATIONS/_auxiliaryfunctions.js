function gets() {
    return 10;
}

function print(text) {
    console.log(text);
}

//Can be >> module.exports.gets = gets;
module.exports = {gets, print};