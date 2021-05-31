class Hex{
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return this.value
    };

    toString(){
        return '0x' + Math.abs(this.value).toString(16).toUpperCase()
    }

    plus(number){
        return new Hex((Math.abs(this.value)+number))
    }

    minus(number){
        return new Hex((Math.abs(this.value)-number))
    }

    parse(string){
        return parseInt(string, 16)
    }
}

let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('0xF'))