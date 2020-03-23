const closeNeigh = (n, a, b, c) => {
    let high = 9;
    let answer = [];
    console.log(high)

    if (a >= b && a >= c) {high = a};
    else if (b >= a && b >= c) {high = b};
    else {high = c};

    for (let i = n; i >= 0; i -= high) {
        if (i % a === 0 && i % b === 0 && i % c === 0) {
            answer.push(i)
        }
    }
    for (let i = n; i <= n*a*b*c; i += high) {
        if (i % a === 0 && i % b === 0 && i % c === 0) {
            answer.push(i)
        }
    }
};

console.log(closeNeigh(100, 2,3,4))