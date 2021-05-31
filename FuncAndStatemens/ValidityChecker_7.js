function validityChecker(x1, y1, x2, y2){
    let result = ''
    let firstCheck = Math.sqrt(((0-x1)**2)+((0-y1)**2))
    if (Number.isInteger(firstCheck)){
        result += `{${x1}, ${y1}} to {0, 0} is valid\n`
    }else{
        result += `{${x1}, ${y1}} to {0, 0} is invalid\n`
    }

    let secondCheck = Math.sqrt(((0-x2)**2)+((0-y2)**2))
    if (Number.isInteger(secondCheck)){
        result +=`{${x2}, ${y2}} to {0, 0} is valid\n`
    }else{
        result +=`{${x2}, ${y2}} to {0, 0} is invalid\n`
    }

    let thirdCheck = Math.sqrt(((x1-x2)**2)+((y1-y2)**2))
    if (Number.isInteger(thirdCheck)){
        result +=`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
    }else{
        result +=`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
    }
    return result
}


console.log(validityChecker(3, 0, 0, 4))
console.log(validityChecker(2, 1, 1, 1))