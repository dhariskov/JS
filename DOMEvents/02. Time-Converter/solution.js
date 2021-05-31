function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn')
    const hoursBtn = document.getElementById('hoursBtn')
    const minutesBtn = document.getElementById('minutesBtn')
    const secondsBtn = document.getElementById('secondsBtn')
    daysBtn.addEventListener('click', clickedDays)
    hoursBtn.addEventListener('click', clickedHours)
    minutesBtn.addEventListener('click', clickedMinutes)
    secondsBtn.addEventListener('click', clickedSeconds)

    function clickedDays(e){
        const value = e.target.parentNode.children[1].value
        document.getElementById('hours').value = value*24
        document.getElementById('minutes').value = value*1440
        document.getElementById('seconds').value = value*86400
    }

    function clickedHours(e){
        const value = e.target.parentNode.children[1].value
        document.getElementById('days').value = value/24
        document.getElementById('minutes').value = value*60
        document.getElementById('seconds').value = value*3600
    }

    function clickedMinutes(e){
        const value = e.target.parentNode.children[1].value
        document.getElementById('days').value = value/1440
        document.getElementById('hours').value = value/60
        document.getElementById('seconds').value = value*60
    }

    function clickedSeconds(e){
        const value = e.target.parentNode.children[1].value
        document.getElementById('days').value = value/86400
        document.getElementById('hours').value = value/3600
        document.getElementById('minutes').value = value/60
    }
}