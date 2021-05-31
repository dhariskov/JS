function storeCatalogue(arr) {
    let result = {};
    let temp;
    for (let el of arr) {
        temp = el.split(' : ')
        result[temp[0]] = temp[1]
    }
    let res1 = Object.keys(result).sort((a, b) => a.localeCompare(b));
    let data = '';
    let letter = '';
    for (let el of res1) {
        if (letter !== el[0]) {
            letter = el[0]
            data += letter + `  \n${el}: ${result[el]}\n`
        } else {
            data += `${el}: ${result[el]}\n`
        }
    }
    return data
}

console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))