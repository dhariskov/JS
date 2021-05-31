function twoCriteriaSort(arr) {
    let result = arr.sort((a, b) => (a.length == b.length) ? a.localeCompare(b) : a.length - b.length)
    return result.join('\n')
}

console.log(twoCriteriaSort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
))