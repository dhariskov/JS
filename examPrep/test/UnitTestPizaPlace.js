const describe = require('mocha').describe
const assert = require('chai').assert

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe("Tests …", function () {
    describe("TODO …", () => {
        it('Test makeAnOrder', () => {
            let objToTest1 = {orderedPizza: 'PizaName', orderedDrink: 'DrinkName',}
            let objToTest2 = {orderedDrink: 'DrinkName',}
            let objToTest3 = {orderedPizza: 'PizaName',}
            let objToTest4 = {}
            // assert.throw(()=>pizzUni.makeAnOrder(objToTest1) ,'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder(objToTest2), 'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder(objToTest4), 'You must order at least 1 Pizza to finish the order.')

            assert.equal(pizzUni.makeAnOrder(objToTest3), `You just ordered ${objToTest3.orderedPizza}`)
            assert.equal(pizzUni.makeAnOrder(objToTest1), `You just ordered ${objToTest1.orderedPizza} and ${objToTest1.orderedDrink}.`)
        });
        it('Test tgetRemainingWork', () => {
            let arrPizza = [{pizzaName: 'Pizza1', status: 'ready'}, {pizzaName: 'Pizza2', status: 'preparing'}]
            let arrPizza1 = [{pizzaName: 'Pizza1', status: 'preparing'}, {pizzaName: 'Pizza2', status: 'preparing'}]
            let arrPizza2 = [{pizzaName: 'Pizza1', status: 'ready'}, {pizzaName: 'Pizza2', status: 'ready'}]
            assert.equal(pizzUni.getRemainingWork(arrPizza), 'The following pizzas are still preparing: Pizza2.')
            assert.equal(pizzUni.getRemainingWork(arrPizza1), 'The following pizzas are still preparing: Pizza1, Pizza2.')
            assert.equal(pizzUni.getRemainingWork(arrPizza2), 'All orders are complete!')
        });
        it('Tets orderType', ()=> {
            assert.equal(pizzUni.orderType(100, 'Carry Out'),100*0.9)
            assert.equal(pizzUni.orderType(100, 'Delivery'),100)
        });
    });

});
