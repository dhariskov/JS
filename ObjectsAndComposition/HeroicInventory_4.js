function heroicInventory(arr) {
    let result = []
    let arr1 = arr.map(el => el.split(' / '))
    for (let i = 0; i < arr.length; i++) {
        result.push({
            name: arr1[i][0],
            level: Number(arr1[i][1]),
            items: (arr1[i][2] != undefined ?arr1[i][2].split(', '):[])
        })
    }
    return JSON.stringify(result)
}

console.log(heroicInventory(['Jake / 1000']
))