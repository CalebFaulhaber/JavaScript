const zip = (arr1, arr2) => {
    let answer = []
    if (arr1.length !== arr2.length) {
        console.log('undefined')
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            answer.push([arr1[i],arr2[i]])
        }
    }
    console.log(answer)
}

zip([1, 2, 3], [4, 5, 6])