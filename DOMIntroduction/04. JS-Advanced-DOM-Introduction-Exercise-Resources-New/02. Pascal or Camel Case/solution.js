function solve() {
    let text = document.getElementById('text').value.split(' ');
    const namingConvention = document.getElementById('naming-convention').value;
    let result = ''
    if (namingConvention === 'Camel Case') {
        result += text[0].toLowerCase()
    } else if (namingConvention === 'Pascal Case') {
        result += text[0][0].toUpperCase() + text[0].slice(1).toLowerCase()
    } else {
        result = 'Error!'
    }

    if (result!== 'Error!'){
        for (let i = 1; i < text.length; i++) {
            result += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase()
        }
    }
    document.getElementById('result').textContent = result
}