let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

const mergeSets = (arr1, arr2) => {
    let newArr = [];
    let temp = arr1.concat(arr2)
    for (let value of temp) {
        if(!newArr.includes(value)){
            newArr.push(value)
        }
    }
    // for (let i = 0; i < arr1.length; i++) {
    //     if (!newArr.includes(arr1[i])) {
    //         newArr.push(arr1[i])
    //     }
    //     if (!newArr.includes(arr2[i])) {
    //         newArr.push(arr2[i])
    //     }
    // }
    console.log(newArr)
}


mergeSets(arr1, arr2);