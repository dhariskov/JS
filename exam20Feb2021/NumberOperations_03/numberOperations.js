const describe = require('mocha').describe
const assert = require('chai').assert

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe("Tests …", function() {
    describe("TODO …", function() {
        it("Test tpowNumber", function() {
            const obj1 = numberOperations.powNumber('5')
            const obj2 = numberOperations.powNumber('-10')

            assert.equal(obj1, 25)
            assert.equal(obj2, 100)
        });

        it("Test tnumberChecker", function() {
            const obj1 = numberOperations.numberChecker('-5')
            const obj2 = numberOperations.numberChecker('100')
            const obj3 = numberOperations.numberChecker('101')

            assert.equal(obj1, 'The number is lower than 100!')
            assert.equal(obj2, 'The number is greater or equal to 100!')
            assert.equal(obj3, 'The number is greater or equal to 100!')
            assert.throw(() => numberOperations.numberChecker('text'), 'The input is not a number!')
        });

        it("Test sumArrays", function() {
            const obj1 = numberOperations.sumArrays([1,2,3,0],[1,2,3,0])
            const obj2 = numberOperations.sumArrays([],[])
            const obj3 = numberOperations.sumArrays([1,2,3,0],[1,2,3,0,4,5,6])

            assert.deepEqual(obj1,[2,4,6,0])
            assert.deepEqual(obj2,[])
            assert.deepEqual(obj3,[ 2, 4, 6, 0, 4, 5, 6 ])

        });
    });
});
