const describe = require('mocha').describe
const assert = require('chai').assert

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe("Tests …", function() {
    describe("TODO …", function() {

        it("Test newCarCost", function() {
            let car1 = dealership.newCarCost('Audi A4 B8', 30000)
            let car2 = dealership.newCarCost('Audi A6 4K', 30000)
            let car3 = dealership.newCarCost('Audi A8 D5', 30000)
            let car4 = dealership.newCarCost('Audi TT 8J', 30000)
            let car5 = dealership.newCarCost('No such car', 30000)

            assert.equal(car1, 15000)
            assert.equal(car2, 10000)
            assert.equal(car3, 5000)
            assert.equal(car4, 16000)
            assert.equal(car5, 30000)
        });
        it('Test carEquipment', ()=>{
            let car1 = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2, 3])
            assert.deepEqual(car1, ['heated seats', 'sport rims', 'navigation'])
        })
        it('Test euroCategory', ()=>{
            let car1 = dealership.euroCategory(5)
            let car2 = dealership.euroCategory(4)
            let car3 = dealership.euroCategory(3)

            assert.equal(car1,'We have added 5% discount to the final price: 14250.')
            assert.equal(car2,'We have added 5% discount to the final price: 14250.')
            assert.equal(car3,'Your euro category is low, so there is no discount from the final price!')
            // console.log(car1)
        })
    });
});
