function search() {
    let data = document.querySelectorAll('#towns>li')
    let input = document.querySelector('input').value
    let count = 0
    for (let el of data){
        if (el.textContent.includes(input)){
            el.style.fontWeight = 'bold'
            el.style.textDecoration = 'underline'
            count++
        }else{
            el.style.fontWeight = ''
            el.style.textDecoration = ''
        }
    }
    document.getElementById('result').textContent = `${count} matches found`
}
