function sameNumbers(number){
    isEqual = true
    const string = number.toString()
    let sum = 0
    for (let i = 0; i<string.length-1; i++){
        sum += Number(string[i])
        if (string[i] == string[i+1]){
            isEqual = true && isEqual
        }else{
            isEqual=false && isEqual
        }
    }
    sum += Number(string.slice(-1))
    return `${isEqual}\n${sum}`
}


console.log(sameNumbers(1234))
console.log(sameNumbers(2222222))