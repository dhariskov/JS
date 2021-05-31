// function printElement(arr, n){
//     n = Number(n);
//     let result = '';
//     for (let i=0; i<arr.length; i+=n){
//         result += `${arr[i]},`
//     }
//     result = result.split(',');
//     result.pop();
//     return result
// }

function printElement(arr, n){
    let result = arr.filter((arr, i) => i%n==0)
    return result
}

console.log(printElement(['1',
        '2',
        '3',
        '4',
        '5'],
    6

))