function extractIncreasingSubsequence(arr){
    let biggestNumber = arr[0]
    let result = []
    result.push(biggestNumber)
    for (let i = 1; i<arr.length; i++){
        if (biggestNumber <= arr[i]){
            biggestNumber = arr[i]
            result.push(biggestNumber)
        }
    }
    return result
}

console.log(extractIncreasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]

))