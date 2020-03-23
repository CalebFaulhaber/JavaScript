// isEven

// const isEven = (num) => {
//     let answer = 'False'
//     for (let i = 0; i < num && i <= num - i; i++) {
//             console.log(i)
//         console.log(num-i)
//         if (i === num - i) {
//             answer = 'True'
//         }
//     }
//     console.log(`The number is even: ${answer}.`)
// }

const isEven = (num) => {
    const half = num * 0.5;
    console.log(Math.round(half) === half);
}

isEven(10)