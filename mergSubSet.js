const matchSet = (arr1, arr2) => {
    let match = [];
    for (let value of arr1) {
        if (arr2.includes(value) && !match.includes(value)) {
            match.push(value);
        }
    }
    for (let value of arr2) {
        if (arr1.includes(value) && !match.includes(value)) {
            match.push(value);
        }
    }
 console.log(match)
}


matchSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])