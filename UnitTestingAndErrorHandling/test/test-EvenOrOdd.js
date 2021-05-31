const describe = require('mocha').describe
const assert = require('chai').assert

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

describe(`check isOddOrEven`, ()=>{
    it ('Type is string', ()=>{
        assert.equal(isOddOrEven(1),undefined, 'It is not String')
    })
    it ('Even', ()=>{
        assert.equal(isOddOrEven('wert'),'even')
    })
    it ('Odd', ()=>{
        assert.equal(isOddOrEven('werte'),'odd')
    })
})