function sortingNumbers(arr){
    arr.sort(function(a, b){return a-b})
    let result = []
    while (arr.length > 0){
        result.push(arr.shift())
        if (arr.length != 0){
            result.push(arr.pop())
        }
    }
    return result
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31,4, -3, 18, 56]))