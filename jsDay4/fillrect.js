
// const fillRect = (w,h,t) => {
//     let inArr = []
//     let answer = [];
//     for (let i = 0; i < w; i++) {
//         inArr.push(t)
//     }
//     for (let i = 0; i < h; i++) {
//         answer.push(inArr)
//     }
//     console.log(answer)    
// }


// fillRect(2, 2, "*")

const rectToStr = (w,h,t) => {
    let str1 = t.repeat(w) + "\n";
    if (h >= 1) {
        console.log(str1.repeat(h-1) + t.repeat(w));
    } else
    console.log(str1.repeat(h));
}

rectToStr(3,4,'t')