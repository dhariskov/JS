function addAndRemoveElements(command) {
    let result = []
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'add') {
            result.push(i+1)
        } else if (command[i] === 'remove') {
            result.pop()
        }
    }
    if (result.length==0){
        result.push('Empty')
    }
    return `${result.join('\n')}`
}

console.log(addAndRemoveElements((['remove',
        'remove',
        'remove']
)))