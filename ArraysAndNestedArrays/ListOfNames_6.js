function listOfNames(arr){
    arr.sort(function (a, b){
        return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    let result = ''
    for (let i=0; i<arr.length; i++){
        result += `${i+1}.${arr[i]}\n`
    }
    return result
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema", 'ema']))