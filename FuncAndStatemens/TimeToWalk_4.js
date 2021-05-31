function timeToWalk(steps, footprint, speed){
    let lenght = ((footprint)*steps);
    const rest = Math.floor(lenght/500)
    let time = lenght/(speed*(1000/3600)) + rest*60
    let hours = Math.floor(time/3600).toFixed(0).padStart(2, '0')
    let mins = Math.floor((time - (3600*hours))/60).toFixed(0).padStart(2, '0')
    let seconds = (time - hours*60*60 - mins*60).toFixed(0).padStart(2, '0')
    return `${hours}:${mins}:${seconds}`

}


console.log(timeToWalk(4000, 0.60, 5))
console.log(timeToWalk(2564, 0.70, 5.5))