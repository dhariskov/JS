function roadRadar(speed, area){
    if (area == "motorway"){
        limit = 130;
    }else if (area == "interstate"){
        limit=90;
    }else if (area == "city"){
        limit=50;
    }else if (area == "residential"){
        limit=20;
    }
    return driverMessage(limit, speed)

    function driverMessage(limit, speed){
        const seedDiff = speed-limit
        let status
        if (seedDiff <= 0){
            return `Driving ${speed} km/h in a ${limit} zone`
        }else if(seedDiff <= 20){
            status = 'speeding'
        }else if (seedDiff <= 40){
            status = 'excessive speeding'
        }else{
            status = 'reckless driving'
        }
        return `The speed is ${seedDiff} km/h faster than the allowed speed of ${limit} - ${status}`
    }
}



console.log(roadRadar(40, 'city'))
console.log(roadRadar(21, 'residential'))
console.log(roadRadar(120, 'interstate'))
console.log(roadRadar(200, 'motorway'))
