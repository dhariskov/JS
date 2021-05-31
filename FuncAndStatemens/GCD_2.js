function GCD(x, y){
    while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
      return x;
}

console.log(GCD(15,5))
console.log(GCD(2154,458))