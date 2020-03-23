
const flatten = arr => {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            answer.push(arr[i])
        }
        else {
            answer.push(...flatten(arr[i]))
        }
    }
    return answer;
}

console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]]]));
// console.log(flatten([2, [8]]));
