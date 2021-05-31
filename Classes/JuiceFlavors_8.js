function solve(arr){
    let temp = ''
    let objJuice = {}
    let objBottle = {}
    // let arrBottles = []

    // class Bottles{
    //     constructor(juice, bottles) {
    //         this.juice = juice;
    //         this.bottles = bottles
    //     }
    // }

    for (let el of arr){
        temp = el.split('=>')
        if (!objJuice[temp[0]]){
            objJuice[temp[0]] = 0
        }
        objJuice[temp[0]] += Number(temp[1])
        if (objJuice[temp[0]]>=1000){
            if (!objBottle[temp[0]]){
                objBottle[temp[0]]=0
            }
            const bottles = Math.floor(Number((objJuice[temp[0]])/1000))
            objBottle[temp[0]] += bottles
            objJuice[temp[0]] -= bottles*1000
        }
    }


    let result = ''
    for (let [k, v] of Object.entries(objBottle)){
        // arrBottles.push(new Bottles(k,v))
        result += `${k}=> ${v}\n`
    }
    // for (let el of arrBottles){
    //     result += `${el['juice']}=> ${el['bottles']}\n`
    // }

    return result
}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))