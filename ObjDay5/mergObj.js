//mergObj.js

const mergObj = (obj1, obj2) => {
    let answer = {};
    if (Object.keys(obj1).length < Object.keys(obj2).length) {
        for (let k in obj2) {
            answer[k] = obj1[k];
            answer[k] = obj2[k];
        }
    } 
    else {
        for (let k in obj1) {
            answer[k] = obj1[k];
        }
        for (let k in obj2) {
            answer[k] = obj2[k];
        }
    }
    return answer;
}

console.log(mergObj({firstName: 'Ron', lastName: 'Wesley'}, {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}));