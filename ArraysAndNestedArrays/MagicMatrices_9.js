function magicMatrices(arr){
    let transposedArr = []
    for (let i =0; i<arr.length; i++){
        transposedArr.push([])
    }

    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            transposedArr[j].push(arr[i][j]);
        }
    }

    let flag = true
    let transposedFlag = true
    let sum1 =0
    let sum2 = 0
    let transposedSum1 = 0
    let transposedSum2 = 0
    for (let i=0; i<arr.length-1; i++){
        sum1 = arr[i].reduce((acc, current) => acc+current)
        sum2 = arr[i+1].reduce((acc, current)=>acc+current)
        if (sum1 != sum2){
            flag = false
            return false
        }

        transposedSum1 = transposedArr[i].reduce((acc, current) => acc+current)
        transposedSum2 = transposedArr[i+1].reduce((acc, current)=>acc+current)
        if (transposedSum1 != transposedSum2){
            transposedFlag = false
            return false
        }
        if (flag=!transposedFlag){
            return false
        }
    }

    return true
}

console.log(magicMatrices([[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]

))