
const areValuesArrays = (arr) => {
    let answer = 'True';
    for (let inArr of arr) {
        if (!Array.isArray(inArr)) {
            answer = 'False'
        }
    }
    console.log(`All values in array are all arrays: \"${answer}\."`)
}

areValuesArrays([[1], 4, [6, 7, 8]]);

