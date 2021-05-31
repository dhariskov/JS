function solve() {
    const input = document.getElementById('input').value
    let textSplit = input.split('.')
    let filteredArr = textSplit.filter(el => el != '')
    let result = ''
    for (let i=0; i<filteredArr.length; i+=3){
        result+=`<p>${filteredArr[i]}.`
        if (filteredArr[i+1]!= undefined){
            result += `${filteredArr[i+1]}.`
        }
        if (filteredArr[i+2]!= undefined){
            result += `${filteredArr[i+2]}.`
        }
        result+='</p>\n'
    }
    document.getElementById('output').innerHTML = result

}