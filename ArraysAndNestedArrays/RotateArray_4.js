function rotateArray(arr, num){
    let elementToMove
    for (let i=0; i<num; i++){
        elementToMove = arr.pop()
        arr.unshift(elementToMove)
    }
    return arr.join(' ')
}

console.log(rotateArray(['1',
        '2',
        '3',
        '4'],
    2
))
