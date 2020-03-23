let arr = ['t', 'b', 'c']
let type = 0;

const isSame = (arr) => {
    let compare = 'True'
    for (let v of arr) {
        if (type === typeof(v) ) {
            let typeV = typeof(v)
        }
        else if (type === 0){
            type = typeof(v)
        }
        else if (typeof(V) !== type) {compare = 'False'}
    }
    console.log(`Array values are all same type: ${compare}.`)
}

isSame(arr)