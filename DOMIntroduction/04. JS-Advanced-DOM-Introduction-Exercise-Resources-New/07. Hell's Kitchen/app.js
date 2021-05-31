function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    function onClick() {
        let array = JSON.parse(document.querySelector('textarea').value);
        let restaurants = [];

        array.forEach((record) => {
            const temp = record.split(' - ');
            const restaurantName  = temp[0];
            const workers = temp[1];
            const token = workers.split(', ');
            const tempObj = new Map();
            token.forEach((el)=>{
                const workerDetails = el.split(' ');
                let workerName = workerDetails[0];
                const workerSalary = Number(workerDetails[1]);
                tempObj.set(workerName, workerSalary)
            })
            for (let rest of restaurants){
                if (rest.restaurantName==restaurantName){
                    for (let [k, v] of rest.sortedWorkersBySalary){
                        tempObj.set(k, v)
                    }
                    restaurants = restaurants.filter(el=>el.restaurantName!=restaurantName)
                }
            }
            const sortedWorkersBySalary = new Map([...tempObj.entries()].sort((a, b) => b[1] - a[1]))
            restaurants.push({
                restaurantName,
                sortedWorkersBySalary,
                averageSalary: function (){
                    let sum = 0;
                    for (let [_, value] of this.sortedWorkersBySalary) {
                        sum += value
                    }
                    return (sum/this.sortedWorkersBySalary.size).toFixed(2)
                },
                bestSalary: function (){
                    return [...sortedWorkersBySalary][0][1].toFixed(2)
                }
            })
        })
        const sortedRestaurants = restaurants.sort((a, b) => b.averageSalary() - a.averageSalary())
        let result1 = `Name: ${sortedRestaurants[0].restaurantName} Average Salary: ${sortedRestaurants[0].averageSalary()} Best Salary: ${sortedRestaurants[0].bestSalary()}`

        let result2 = ''
        for(let [k, v] of restaurants[0].sortedWorkersBySalary){
            result2 += `Name: ${k} With Salary: ${v} `
        }
        document.querySelector('#bestRestaurant>p').textContent = result1
        document.querySelector('#workers>p').textContent = result2

    }
}