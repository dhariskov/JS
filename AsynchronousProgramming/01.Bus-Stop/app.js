async function getInfo() {
    const input = document.getElementById('stopId')
    const busId = input.value
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + busId

    try{
        const ul = document.getElementById('buses')
        ul.innerHTML = ''
        const response = await fetch(url)
        const data = await response.json()

        let text = ''
        const test = Object.entries(data.buses)
        for (let el of Object.entries(data.buses)){
            text += `<li>Bus ${el[0]} arrives in ${el[1]} minutes</li>`
        }

        const div = document.getElementById('stopName')
        div.textContent = data.name

        ul.innerHTML = text
        input.value = ''
    }catch (error){
        document.getElementById('stopName').textContent = 'Error'
    }
}