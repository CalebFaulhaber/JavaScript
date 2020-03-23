const plus = (a,b) => a+b;
const numbers = [1,2,3,4,5];

const reduce = (arr, fn, n) => {
    for (let i = 0; i < arr.length; i++){
        n = fn(n, arr[i])
    }
    return n;
} 

console.log(reduce(numbers, plus, 0));