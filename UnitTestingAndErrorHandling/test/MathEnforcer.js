const describe = require('mocha').describe
const assert = require('chai').assert


let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('Testing mathEnforcer', () => {
    describe('Test addFive', () => {
        it('Test addFive', () => {
            assert.isUndefined(mathEnforcer.addFive('sadasd'))
            assert.equal(mathEnforcer.addFive(5), 10)
            assert.equal(mathEnforcer.addFive(-10), -5)
            assert.equal(mathEnforcer.addFive(2.5), 7.5)
            assert.equal(mathEnforcer.addFive(-2.5), 2.5)
        })
    })

    describe('subtractTen', () => {
        it('Test subtractTen', () => {
            assert.isUndefined(mathEnforcer.subtractTen('sadasd'))
            assert.equal(mathEnforcer.subtractTen(19), 9)
            assert.equal(mathEnforcer.subtractTen(-19), -29)
            assert.equal(mathEnforcer.subtractTen(-19.5), -29.5)
        })
    })

    describe('sum', () => {
        it('Test sum', () => {
            assert.isUndefined(mathEnforcer.sum('safd', 'asdf'))
            assert.isUndefined(mathEnforcer.sum(1, 'asdf'))
            assert.isUndefined(mathEnforcer.sum('sadf', 2))
            assert.equal(mathEnforcer.sum(2,3),5)
            assert.equal(mathEnforcer.sum(2.5,2.5),5)
            assert.equal(mathEnforcer.sum(2,2.5),4.5)
            assert.equal(mathEnforcer.sum(-2,-3),-5)
        })
    })
})