class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.capacityLeft = capacity
    }

    addCar(carModel, carNumber) {
        if (!this.capacityLeft) {
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({
            carModel,
            carNumber,
            payed: false,
        })
        this.capacityLeft--
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        for (let car of this.vehicles) {
            if (car.carNumber === carNumber) {
                let index = this.vehicles.indexOf(car)
                if (index !== -1) {
                    if (car.payed) {
                        this.vehicles.splice(index, 1)
                        this.capacityLeft++
                        return `${carNumber} left the parking lot.`
                    }
                    throw new Error (`${carNumber} needs to pay before leaving the parking lot.`)
                }
            }
        }
        throw new Error (`The car, you're looking for, is not found.`)
    }

    pay(carNumber) {
        for (let car of this.vehicles) {
            if (car.carNumber === carNumber) {
                let index = this.vehicles.indexOf(car)
                if (index !== -1) {
                    if (car.payed) {
                        throw new Error (`${carNumber}'s driver has already payed his ticket.`)
                    }
                    car.payed = true
                    return `${carNumber}'s driver successfully payed for his stay.`
                }
            }
        }
        throw new Error (`${carNumber} is not in the parking lot.`)
    }

    getStatistics(carNumber) {
        let result = [];
        if (!carNumber) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);

            let sortedVehicles = this.vehicles.sort((car1, car2) => car1.carModel.localeCompare(car2.carModel));
            for (let car of sortedVehicles) {
                result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
            }

        } else {
            const carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);
            result.push(`${this.vehicles[carIndex].carModel} == ${this.vehicles[carIndex].carNumber} - ${this.vehicles[carIndex].payed ? 'Has payed' : 'Not payed'}`);
        }

        return result.join('\n');
    }

//     getStatistics(carNumber) {
//         let result = ''
//         this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
//         if (carNumber === undefined) {
//             result += `The Parking Lot has ${this.capacityLeft} empty spots left.\n`
//             for (let car of this.vehicles) {
//                 result += `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}\n`
//             }
//         } else {
//             for (let car of this.vehicles) {
//                 if (car.carNumber === carNumber) {
//                     result += `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}\n`
//                 }
//             }
//         }
//         return result
//     }
}

const parking = new Parking(2);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo t600", "TX3691CA1"))
console.log(parking.addCar("Volvo t600", "TX3691CA2"))
console.log(parking.pay("TX3691CA"));
console.log(parking.pay("TX3691CA1"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.removeCar("TX3691CA1"));

console.log(parking.getStatistics("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
