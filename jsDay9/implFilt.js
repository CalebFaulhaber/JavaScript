
const even = n => n % 2 === 0;
const odd = n => !even(n);
const above = min => n => n > min;
const repeatedValue = (value, index, arr) => index !== arr.indexOf(value);

const filter = (arr, fn) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i, arr)) {
            answer.push(arr[i])
        }
    }
    return answer;
};

console.log(filter([1,2,3,4,5], odd))