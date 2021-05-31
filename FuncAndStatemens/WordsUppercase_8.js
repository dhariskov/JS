function wordsUppercase(text){
    const re = /[A-Za-z0-9"]*/g;
    const result = text.match(re)
                    .filter(word => word.length>0)
                    .map(word => word.toUpperCase())
                    .join(', ')
    return result
}

console.log(wordsUppercase('hello "hello"'))