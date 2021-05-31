const describe = require('mocha').describe
const assert = require('chai').assert


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe ('Testing lookupChar', ()=>{
    it ('Incorrect input', ()=>{
        assert.isUndefined(lookupChar(1, 1))
        assert.isUndefined(lookupChar(1, 0))
        assert.isUndefined(lookupChar('weqwr', 'df'))
        assert.isUndefined(lookupChar('weqwr', 'd'))
        assert.isUndefined(lookupChar(1, 'assadf'))
        assert.isUndefined(lookupChar('weqwr', 2.3))
        assert.isUndefined(lookupChar('weqwr', -2.3))

    })

    it ('Incorrect index', ()=>{
        assert.equal(lookupChar('testingString' , -1), 'Incorrect index')
        assert.equal(lookupChar('test' , 4), 'Incorrect index')
    })

    it ('Testing correct output', ()=>{
        assert.equal(lookupChar('testingString' , 0), 't')
        assert.equal(lookupChar('test' , 3), 't')
        assert.equal(lookupChar('abv' , 2), 'v')
    })
})