function carFactory(obj) {
    function getEngine(power) {

        let car = {};
        const engines = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500}
        ]
        let result
        for (let i=0; i<engines.length; i++){
            if (engines[i].power>=power){
                result = engines[i]
                break
            }
        }
        return result
    }
    function wheelsSize(wheelsSize){
        if (wheelsSize%2 == 0){
            wheelsSize-=1
        }
        return [wheelsSize, wheelsSize, wheelsSize, wheelsSize]
    }

    const car={
        model: obj.model,
        engine: getEngine(obj.power),
        carriage:{type: obj.carriage, color: obj.color},
        wheels: wheelsSize(obj.wheelsize),
    }
    return car
}

console.log(carFactory({ model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16 }

))