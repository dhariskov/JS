function solve(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number((Number(price)).toFixed(2));
            this.status = status;
        }
    }

    let resultArr = []

    for (let record of arr) {
        let ticket = record.split('|');
        resultArr.push(new Ticket(ticket[0], ticket[1],ticket[2]))
    }

    const sorter = {
        'destination': (a,b) => a.destination.localeCompare(b.destination),
        'price': (a,b) => a.price-b.price,
        'status': (a,b) => a.status.localeCompare(b.status),
    }

    return resultArr.sort(sorter[sortCriteria])

}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))