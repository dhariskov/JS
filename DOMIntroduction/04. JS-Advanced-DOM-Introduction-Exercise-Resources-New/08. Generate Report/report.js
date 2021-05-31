function generateReport() {
    const headers = document.getElementsByTagName('th')

    let mapCellIndexAndText = new Map()
    for (let head of headers) {
        if (head.childNodes[1].checked){
            mapCellIndexAndText.set(head.childNodes[1].name,head.cellIndex)
        }
    }

    const rows = [...document.querySelectorAll('tbody tr')]
    let result = []
    for (let row of rows){
        const obj = {}
        for (let [k, v] of mapCellIndexAndText){
            obj[k] = row.children[v].textContent
        }
        result.push(obj)
    }
    document.getElementById('output').innerText = JSON.stringify(result)
}