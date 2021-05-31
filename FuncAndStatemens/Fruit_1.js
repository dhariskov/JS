function fruit1(fruit, weight, price){
    let money = (weight/1000)*price;
    return `I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(fruit1('orange', 2500, 1.80))
console.log(fruit1('apple', 1563, 2.35))