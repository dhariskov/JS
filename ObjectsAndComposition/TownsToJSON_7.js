function townsToJSON(arr) {
    let [, Town, Latitude, Longitude] = arr[0].split('|');
    Town=Town.trim()
    Latitude=Latitude.trim()
    Longitude=Longitude.trim()

    let resultArray = [];
    let result = {};
    for (let i=1; i<arr.length; i++){
        [,result[Town], result[Latitude], result[Longitude]] = arr[i].split('|');
        result[Town] = result[Town].trim()
        result[Latitude] = Number(Number(result[Latitude].trim()).toFixed(2))
        result[Longitude] = Number(Number(result[Longitude].trim()).toFixed(2))

        resultArray.push(JSON.parse(JSON.stringify(result)))
    }
    // return resultArray
    return JSON.stringify(resultArray)
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))