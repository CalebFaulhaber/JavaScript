let num = parseFloat(process.argv[2]);
let arr = [];
let last = 0;
let seq = 1;
console.log(num)
for (let i = 0; i < num; i++) {
    if (i == 0) {
        arr.push(seq);
    }
    else {
        last = last + seq;
        seq = last - seq;
        if (seq + last > num) {break}
        else arr.push(seq + last);
    }
}

arr.forEach(o => console.log(o));
