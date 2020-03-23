const findMulti = (arr) => {
    let answer = [];  
    let right = [...arr]
   
    for (let i = 0; i < arr.length - 1; i++) {
        right.shift();
        if (right.includes(arr[i]) && !answer.includes(arr[i])) {
            answer.push(arr[i]);
        }
    }
    console.log(answer)
}

findMulti(['Bob', 'bob', 'Rob', 'Rob', 'Rob', 1, 2, 3, 4, 4]);