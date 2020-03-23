const even = n => n % 2 === 0;
const odd = n => !even(n);
const pow2 = n => n ** 2;

const map = (arr, fn) => {
    if (arr.length < 1) return undefined;
    else if (arr.length === 0) return fn(arr[0]);
    else {
        let newArr = [];
        newArr.push(arr[0])
        console.log(newArr)
        newArr.push(map(arr.slice(1), fn));
        return newArr;
    }

}

console.log(map([1,2,3,4,5,6], pow2))
