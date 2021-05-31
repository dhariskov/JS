function solve() {

    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    const infoBox = document.getElementsByClassName('info')[0]

    let stop = {
        next: 'depot',
        name: 'Depot'
    }

    async function depart() {

        try {
            const url = 'http://localhost:3030/jsonstore/bus/schedule/' + stop.next
            const response = await fetch(url)
            const data = await response.json()

            infoBox.textContent = `Next stop ${data.name}`
            stop = data
            departBtn.disabled = true
            arriveBtn.disabled = false
        }
        catch (Error){
            departBtn.disabled = false
            arriveBtn.disabled = false
            infoBox.textContent = 'Error'
        }


    }

    function arrive() {
        arriveBtn.disabled = true
        departBtn.disabled = false
        infoBox.textContent = `Arriving at ${stop.name}`


    }

    return {
        depart,
        arrive
    };
}

let result = solve();