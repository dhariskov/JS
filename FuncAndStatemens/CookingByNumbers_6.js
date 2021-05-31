function cookingByBumbers(number, ...params){
    let num = Number(number)
    for (let i=0 ; i<5; i++){
        if (params[i] == 'chop'){
            num = num/2;
        }else if (params[i] == 'dice'){
            num = Math.sqrt(num);
        }else if (params[i] == 'spice'){
            num = num+1;
        }else if (params[i] == 'bake'){
            num = num*3;
        }else if (params[i] == 'fillet'){
            num = num*0.8;
        }
        console.log(num)
    }
}

// cookingByBumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByBumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')