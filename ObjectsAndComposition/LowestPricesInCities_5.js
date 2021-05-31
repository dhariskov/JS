function lowestPricesInCities(arr) {
    let result = {}
    for (const el of arr) {
        let [town, product, price] = el.split(' | ')
        if (!result[product]) {
            result[product] = {town: town, price: Number(price)}
        } else {
            result[product] = result[product].price > Number(price) ? result[product] = {town: town, price: Number(price)}: result[product]
        }
    }
    let print = ''
    for  (let [k , v] of Object.entries(result)){
        print += `${k} -> ${v.price} (${v.town})\n`
    }
    return print
}

console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
))