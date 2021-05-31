function createSortedList(){
    let resultArray = []
    let size = 0;
    return {
        resultArray,
        size,
        add: function(el){
            this.resultArray.push(el)
            this.resultArray.sort((a,b)=>a-b)
            this.size = resultArray.length
            return this.resultArray
        },
        remove: function (index){
            if (-1<index && index<resultArray.length){
                this.resultArray.splice(index, 1)
                this.size = resultArray.length
                return resultArray
            }
        },
        get: function (index){
            if (-1<index && index<resultArray.length) {
                return this.resultArray[index]
            }
            },
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

