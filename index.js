var assert = require('assert')

function hammingDistance(firstValue, secondValue) {
    let dataType = typeof firstValue;

    switch(dataType) {
        case 'string':
            return distanceBetweenStrings(firstValue, secondValue);
        case 'number':
            return distanceBetweenNumbers(firstValue, secondValue)
        default:
            throw new Error('Type not supported')
    }
}

function distanceBetweenStrings(firstValue, secondValue) {
    assert.strictEqual(firstValue.length, secondValue.length, 'String should be of equal length')
    return [...firstValue].reduce((acc, current, index) => {
        if(current != secondValue[index])
            acc++
        return acc
    }, 0)
}

function distanceBetweenNumbers(firstNumber, secondNumber) {
    var x = firstNumber ^ secondNumber; 
    var setBits = 0; 
  
    while (x > 0)  
    { 
        setBits += x & 1; 
        x >>= 1; 
    } 
  
    return setBits; 
}

module.exports = hammingDistance;
