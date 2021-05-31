class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element)
        this.size++
        return this.list.sort((a, b) => a - b)
    };

    remove(index) {
        if (-1 < index && index < this.size) {
            this.size--
            return this.list.splice(index, 1)
        }
        throw 'error'
    };

    get(index) {
        if (-1 < index && index < this.size) {
            return this.list[index]
        }
        throw 'error'
    };

}

let list = new List();
list.add(5);
list.add(3);
list.add(7);
console.log(list.get(-1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

