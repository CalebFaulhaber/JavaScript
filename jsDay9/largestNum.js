// const maximum = arr => {
//     let highNum = 0;
//     arr.forEach(function(o) {if(o > highNum) highNum = o});
//     return highNum
// };

// const maximum = arr => {
//     let arr1 = arr.splice(0)
//     let i = 0;
//     let highNum = arr1[i];
//     const fn = a => {
//         if (a.length < i) {return highNum};
//         if (a[i] > highNum) {highNum = a[i];}
//         i++
//         fn(a)
//     }
//     fn(arr1)
//     return highNum
// }

const maximum = arr => {
    // base cases
    if(arr.length < 1) return undefined;
    else if(arr.length === 1) return arr[0];
    else {
        let max = maximum(arr.slice(1));
        console.log(max);
        if(arr[0] > max) max = arr[0];
        return max;
    }
}

console.time()
console.log(maximum([-1,-2, '11', 5]));
console.timeEnd()
