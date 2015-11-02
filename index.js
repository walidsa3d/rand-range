var randomInt = function(min, max) {
    if (!isInteger(min) || !isInteger(max))
        throw Error;
    if (min >= max)
        throw Error;
    else
        return Math.floor(Math.random() * (max - min + 1) + min);
};

var randomFloat = function(min, max) {
    if (!isNumber(min) || !isNumber(max))
        throw Error;
    if (min >= max)
        throw Error;
    else
        return Math.random() * (max - min) + min;
};

function isInteger(n) {
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
    return n === Number(n) && n % 1 !== 0;
}

function isNumber(n) {
    return typeof n === 'number';
}

module.exports.randomInt = randomInt;
module.exports.randomFloat = randomFloat;